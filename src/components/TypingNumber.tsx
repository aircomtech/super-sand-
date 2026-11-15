"use client";

import React, { useState, useEffect, useRef } from 'react';

interface TypingNumberProps {
  value: string;
  speed?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function TypingNumber({
  value,
  speed = 90,
  className = "",
  prefix = "",
  suffix = ""
}: TypingNumberProps) {
  const [displayed, setDisplayed] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIdx = 0;
    const fullText = value;
    setDisplayed("");

    const interval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayed(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, value, speed]);

  return (
    <span ref={elementRef} className={`inline-flex items-center ${className}`}>
      {prefix}
      <span>{displayed}</span>
      {suffix}
      {hasStarted && displayed.length < value.length && (
        <span className="inline-block w-1.5 h-6 bg-[#087A35] ml-0.5 animate-pulse" />
      )}
    </span>
  );
}
