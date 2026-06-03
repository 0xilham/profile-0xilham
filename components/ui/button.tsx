import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border-[3px] border-pencil rounded-wobbly font-patrick-hand text-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pencil focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
  {
    variants: {
      variant: {
        default: "bg-white text-pencil shadow-hard hover:bg-marker-red hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-hover",
        destructive: "bg-marker-red text-white shadow-hard hover:bg-pencil hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-hover",
        outline: "border-[3px] border-pencil bg-paper text-pencil hover:bg-muted-paper",
        secondary: "bg-muted-paper text-pencil shadow-hard hover:bg-pen-blue hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-hover",
        ghost: "hover:bg-muted-paper border-transparent",
        link: "text-pencil underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-4",
        lg: "h-14 px-8 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
