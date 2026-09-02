"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      isLoading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-charcoal-900 text-white hover:bg-charcoal-800 border border-charcoal-900 shadow-sm",
      gold:
        "bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 font-semibold shadow-gold-md border border-gold-400/40",
      secondary:
        "bg-white text-charcoal-800 hover:bg-surface-100 border border-surface-border hover:border-gold-300 shadow-sm",
      outline:
        "bg-transparent text-charcoal-700 hover:text-gold-700 border border-surface-border hover:border-gold-400 hover:bg-gold-50/50",
      ghost:
        "bg-transparent text-charcoal-600 hover:text-charcoal-900 hover:bg-surface-100 border border-transparent",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
      md: "text-sm px-4.5 py-2.5 rounded-xl gap-2",
      lg: "text-base px-6 py-3.5 rounded-xl gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === "right" && icon}
      </button>
    );
  }
);

Button.displayName = "Button";
