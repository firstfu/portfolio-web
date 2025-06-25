/**
 * Container 佈局元件
 *
 * 提供響應式容器，控制內容的最大寬度和內邊距
 * 確保內容在不同螢幕尺寸下都有適當的留白
 */

import { cn } from "../../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({ children, className, size = "lg" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        {
          "max-w-3xl": size === "sm",
          "max-w-4xl": size === "md",
          "max-w-6xl": size === "lg",
          "max-w-7xl": size === "xl",
          "max-w-none": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
