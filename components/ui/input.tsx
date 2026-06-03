import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-wobblySm border-2 border-pencil bg-white px-4 py-2 text-lg font-patrick-hand shadow-[2px_2px_0px_0px_rgba(45,45,45,0.1)] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-pencil placeholder:text-pencil/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pen-blue/20 focus-visible:border-pen-blue disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
