"use client"

import { useCallback, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useSearchParams, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const categories = [
  { key: "all", label: "All Spaces" },
  { key: "photoshoot", label: "Photoshoot" },
  { key: "video", label: "Video Shoot" },
  { key: "workshops", label: "Workshops" },
  { key: "podcast", label: "Podcast" },
  { key: "dance", label: "Dance shoot" },
  { key: "film", label: "Film Shoot" },
  { key: "events", label: "Events" },
  { key: "exhibitions", label: "Exhibitions" },
]

export function FilterBar() {
  const params = useSearchParams()
  const router = useRouter()

  const min = Number(params.get("min") || 0)
  const max = Number(params.get("max") || 20000)
  const q = params.get("q") || ""
  const category = params.get("category") || "all"
  const rating = params.get("rating") || "0"

  const setParam = useCallback(
    (key: string, value: string | number) => {
      const p = new URLSearchParams(params.toString())
      if (value === "" || value === "all" || value === "0") p.delete(key)
      else p.set(key, String(value))
      // Reset page whenever filters change
      p.delete("page")
      router.push("?" + p.toString())
    },
    [params, router],
  )

  const priceValue = useMemo(() => [min, max] as number[], [min, max])

  return (
    <div className="rounded-2xl border bg-card/50 p-4 sm:p-5 md:p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <label className="sr-only" htmlFor="q">
            Search
          </label>
          <Input
            id="q"
            placeholder="Search spaces, tags, areas…"
            defaultValue={q}
            onChange={(e) => setParam("q", e.target.value)}
            className="h-11"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="category">
            Category
          </label>
          <Select defaultValue={category} onValueChange={(v) => setParam("category", v)}>
            <SelectTrigger id="category" className="h-11">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent align="start">
              {categories.map((c) => (
                <SelectItem key={c.key} value={c.key}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-xs text-muted-foreground mb-2">Price per hour (Rs.)</label>
          <Slider
            value={priceValue}
            min={0}
            max={20000}
            step={100}
            onValueChange={([lo, hi]) => {
              setParam("min", lo)
              setParam("max", hi)
            }}
          />
          <div className="mt-1 text-xs text-muted-foreground">
            {priceValue[0]} – {priceValue[1]}
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="rating">
            Min Rating
          </label>
          <Select defaultValue={rating} onValueChange={(v) => setParam("rating", v)}>
            <SelectTrigger id="rating" className="h-11">
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectItem value="0">Any rating</SelectItem>
              <SelectItem value="3">3.0+</SelectItem>
              <SelectItem value="4">4.0+</SelectItem>
              <SelectItem value="4.5">4.5+</SelectItem>
              <SelectItem value="5">5.0 only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-5 flex gap-3 overflow-x-auto no-scrollbar">
        {categories.map((c) => {
          const active = category === c.key || (category === "all" && c.key === "all")
          return (
            <button
              key={c.key}
              onClick={() => setParam("category", c.key)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm border transition",
                active
                  ? "bg-(--brand) text-(--brand-foreground) border-transparent"
                  : "bg-background hover:bg-muted/60",
              )}
              aria-pressed={active}
            >
              {c.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
