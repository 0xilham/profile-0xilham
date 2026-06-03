import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-wobblySm border-2 border-pencil bg-white px-4 py-3 text-lg font-patrick-hand shadow-[2px_2px_0px_0px_rgba(45,45,45,0.1)] placeholder:text-pencil/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pen-blue/20 focus-visible:border-pen-blue disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
