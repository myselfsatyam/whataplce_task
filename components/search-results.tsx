"use client"

import useSWR from "swr"
import { useSearchParams } from "next/navigation"
import { SpaceCard } from "./space-card"
import { Skeleton } from "@/components/ui/skeleton"

type Space = {
  id: string
  title: string
  pricePerHour: number
  rating: number
  tags: string[]
  image: string
  category: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function SearchResults() {
  const params = useSearchParams()
  const qs = params.toString()
  const { data, isLoading } = useSWR<{ data: Space[] }>(`/api/spaces?${qs}`, fetcher)

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-72 rounded-3xl" />
        ))}
      </div>
    )
  }

  const spaces = data?.data ?? []

  if (spaces.length === 0) {
    return <div className="text-center text-muted-foreground py-20">No spaces match your filters yet.</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {spaces.map((s) => (
        <SpaceCard key={s.id} space={s} />
      ))}
    </div>
  )
}
