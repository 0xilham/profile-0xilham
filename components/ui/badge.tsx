import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-wobblySm border-2 px-3 py-1 text-sm font-patrick-hand font-bold transition-all focus:outline-none focus:ring-2 focus:ring-pencil shadow-hard-sm hover:-rotate-2",
  {
    variants: {
      variant: {
        default:
          "border-pencil bg-white text-pencil hover:bg-marker-red hover:text-white",
        secondary:
          "border-pencil bg-muted-paper text-pencil hover:bg-pen-blue hover:text-white",
        destructive:
          "border-pencil bg-marker-red text-white hover:bg-pencil",
        outline: "text-pencil border-pencil bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
