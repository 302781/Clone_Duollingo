import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500",
          primary:"bg-sky-408 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
          primaryOutline: "bg-white text-sky-500 hover:bg-slate-10",
          segundary:"bg-green-500 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",//trocar cor do botao no bg-"green" e intensidade da cor "500"
          segundaryOutline: "bg-white text-green-500 hover:bg-slate-10",//trocar cor do texto "text-green"
          danger:"bg-rose-408 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
          dangerOutline: "bg-white text-rose-500 hover:bg-slate-10",
          Super:"bg-indigo-408 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
          SuperOutline: "bg-white text-indigo-500 hover:bg-slate-10",
          ghost:"bg-indigo-408 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
          sidebar:"bg-indigo-408 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
        destructive:
          "bg-green-500 text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        Sidebar:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        SidebarOutline: "bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none",
        link: "text-primary underline-offset-4 hover:underline",
        //premium: "bg-indigo-500 text-white"//tirar a troca de cor do botao la no variant da pagina "page"
      },
      size: {
        default: "h-10 px-4 py-2 ",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        "full-rounded": "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
