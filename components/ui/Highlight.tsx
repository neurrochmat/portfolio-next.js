"use client";

import { ReactNode, useEffect, useState } from "react";
import { RoughNotation, RoughNotationProps } from "react-rough-notation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HighlightProps {
    children: ReactNode;
    type?: RoughNotationProps["type"];
    color?: string;
    strokeWidth?: number;
    animationDuration?: number;
    multiline?: boolean;
    iterations?: number;
    delay?: number;
}

export function Highlight({
    children,
    type = "highlight",
    color = "#a3e635",
    strokeWidth = 2,
    animationDuration = 800,
    multiline = true,
    iterations = 2,
    delay = 0,
}: HighlightProps) {
    const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({
        threshold: 0.5,
        freezeOnceVisible: true,
    });
    const reducedMotion = useReducedMotion();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            if (delay > 0 && !reducedMotion) {
                const timer = setTimeout(() => setShow(true), delay);
                return () => clearTimeout(timer);
            }
            setShow(true);
        }
    }, [isVisible, delay, reducedMotion]);

    return (
        <span ref={ref} className="inline text-inherit">
            <RoughNotation
                type={type}
                show={show}
                color={color}
                strokeWidth={strokeWidth}
                animationDuration={reducedMotion ? 0 : animationDuration}
                multiline={multiline}
                iterations={iterations}
            >
                {children}
            </RoughNotation>
        </span>
    );
}
