"use client";

import { useState, useEffect, useRef, RefObject } from "react";

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
    options: UseIntersectionObserverOptions = {}
): [RefObject<T | null>, boolean] {
    const { threshold = 0.1, rootMargin = "0px", freezeOnceVisible = true } = options;
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsVisible(true);
                    if (freezeOnceVisible) {
                        observer.unobserve(element);
                    }
                } else if (!freezeOnceVisible) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, freezeOnceVisible]);

    return [ref, isVisible];
}
