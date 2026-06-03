import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { decoration?: "tape" | "tack" | "none" }
>(({ className, decoration = "none", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-wobblyMd border-2 border-pencil bg-white text-pencil shadow-hard transition-all duration-300 hover:-rotate-1",
      className
    )}
    {...props}
  >
    {decoration === "tape" && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-pencil/10 -rotate-2 z-10" />
    )}
    {decoration === "tack" && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-marker-red rounded-full border-2 border-pencil shadow-[2px_2px_0px_0px_#2d2d2d] z-10" />
    )}
    {children}
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-bold font-kalam leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-lg font-patrick-hand text-pencil/70", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
