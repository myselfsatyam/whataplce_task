"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
          whattaplace
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="text-foreground/80 hover:text-foreground transition" href="#find">
            Find a Place
          </Link>
          <Link className="text-foreground/80 hover:text-foreground transition" href="#host">
            Host Your Space
          </Link>
          <Link className="text-foreground/80 hover:text-foreground transition" href="#how">
            How it Works
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            className={cn(
              "rounded-full px-4 sm:px-5 py-2 bg-(--brand) text-(--brand-foreground) hover:bg-(--brand)/90 shadow-sm",
            )}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  )
}
