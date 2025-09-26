import Image from "next/image"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Space = {
  id: string
  title: string
  pricePerHour: number
  rating: number
  tags: string[]
  image: string
  category: string
}

export function SpaceCard({ space }: { space: Space }) {
  return (
    <Card className="group relative overflow-hidden rounded-3xl border bg-card/70 animate-in fade-in duration-300 transition-all ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-primary/30 focus-visible:ring-2 focus-visible:ring-primary/40">
      <div className="relative aspect-[4/3]">
        <Image
          src={space.image || "/placeholder.svg"}
          alt={space.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] will-change-transform"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-base sm:text-lg">{space.title}</h3>
          <div className="text-sm sm:text-base whitespace-nowrap">
            Rs. {space.pricePerHour.toLocaleString()} <span className="text-muted-foreground text-xs">per hour</span>
          </div>
        </div>
        <div className="mt-1 flex items-center gap-1 text-sm">
          <StarIcon className="size-4 fill-yellow-400 stroke-yellow-400" />
          <span>{space.rating}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-1">{space.tags.join(" • ")}</p>
      </div>
    </Card>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4 stroke-current", className)} aria-hidden="true">
      <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.8 6.2 20.8l1.1-6.4L2.6 9.8l6.5-.9L12 3z" strokeWidth="1" />
    </svg>
  )
}
