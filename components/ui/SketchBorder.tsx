"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import rough from "roughjs";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SketchBorderProps {
    children: ReactNode;
    className?: string;
    strokeColor?: string;
    strokeWidth?: number;
    roughness?: number;
    padding?: number;
    animate?: boolean;
}

export function SketchBorder({
    children,
    className = "",
    strokeColor = "currentColor",
    strokeWidth = 2,
    roughness = 1.5,
    padding = 0,
    animate = true,
}: SketchBorderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [observerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
        freezeOnceVisible: false,
    });
    const reducedMotion = useReducedMotion();

    // Combine refs
    useEffect(() => {
        if (containerRef.current) {
            (observerRef as React.MutableRefObject<HTMLDivElement | null>).current = containerRef.current;
        }
    }, [observerRef]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateDimensions = () => {
            setDimensions({
                width: container.offsetWidth,
                height: container.offsetHeight,
            });
        };

        updateDimensions();
        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(container);

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg || !isVisible || dimensions.width === 0) return;

        // Clear previous drawing
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        const rc = rough.svg(svg);
        const rect = rc.rectangle(
            padding,
            padding,
            dimensions.width - padding * 2,
            dimensions.height - padding * 2,
            {
                stroke: strokeColor,
                strokeWidth,
                roughness,
                bowing: 1,
            }
        );

        svg.appendChild(rect);

        // Add animation class if enabled
        if (animate && !reducedMotion) {
            rect.classList.add("sketch-draw-animation");
        }
    }, [dimensions, isVisible, strokeColor, strokeWidth, roughness, padding, animate, reducedMotion]);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {isVisible && (
                <svg
                    ref={svgRef}
                    className="absolute inset-0 pointer-events-none z-10"
                    width={dimensions.width}
                    height={dimensions.height}
                    style={{ overflow: "visible" }}
                />
            )}
            {children}
        </div>
    );
}
