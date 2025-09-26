import { type NextRequest, NextResponse } from "next/server"

type Space = {
  id: string
  title: string
  pricePerHour: number
  rating: number
  tags: string[]
  image: string
  category: string
}

const spaces: Space[] = [
  {
    id: "1",
    title: "The Sunday Home",
    pricePerHour: 1200,
    rating: 4.0,
    tags: ["Art director's home", "Hand-painted walls", "Bold colors"],
    image: "/images/sunday-home.jpg",
    category: "photoshoot",
  },
  {
    id: "2",
    title: "Pristine White Foam Factory",
    pricePerHour: 7800,
    rating: 4.5,
    tags: ["Industrial", "Bamboo scaffolding", "Textural backdrop", "30 ft ceiling"],
    image: "/images/foam-factory.jpg",
    category: "video",
  },
  {
    id: "3",
    title: "A Stairway Through Time",
    pricePerHour: 4000,
    rating: 5,
    tags: ["European stairway", "Lime-washed walls", "Rustic interiors"],
    image: "/images/stairway.jpg",
    category: "film",
  },
  {
    id: "4",
    title: "Baithak for the Modern Mughals",
    pricePerHour: 11400,
    rating: 5,
    tags: ["Maximalist", "Contemporary Durbar", "Eclectic"],
    image: "/images/baithak.jpg",
    category: "events",
  },
  {
    id: "5",
    title: "The Forgotten Fireplace",
    pricePerHour: 4000,
    rating: 5,
    tags: ["Colonial bungalow", "Vaulted high ceiling", "Timeless tapestries"],
    image: "/images/fireplace.jpg",
    category: "photoshoot",
  },
  {
    id: "6",
    title: "A Collector's Vault",
    pricePerHour: 3600,
    rating: 4.5,
    tags: ["Vintage soul", "Artefacts fireplace", "Rustic brickwalls"],
    image: "/images/collectors-vault.jpg",
    category: "workshops",
  },
  // Additional filler data
  {
    id: "7",
    title: "Courtyard Heritage Mansion",
    pricePerHour: 5200,
    rating: 4.2,
    tags: ["Arched corridors", "Natural light"],
    image: "/heritage-courtyard-mansion.jpg",
    category: "photoshoot",
  },
  {
    id: "8",
    title: "Minimal White Studio",
    pricePerHour: 900,
    rating: 4.1,
    tags: ["Cyclorama", "North light"],
    image: "/minimal-photo-studio-with-white-walls.jpg",
    category: "photoshoot",
  },
  {
    id: "9",
    title: "Brick Loft for Podcasts",
    pricePerHour: 1500,
    rating: 4.3,
    tags: ["Acoustic panels", "Warm tone"],
    image: "/cozy-brick-loft-podcast-setup.jpg",
    category: "podcast",
  },
  {
    id: "10",
    title: "Dance Rehearsal Hall",
    pricePerHour: 2200,
    rating: 4.6,
    tags: ["Mirrored wall", "Sprung floor"],
    image: "/dance-rehearsal-hall.jpg",
    category: "dance",
  },
  {
    id: "11",
    title: "Open Terrace Venue",
    pricePerHour: 3000,
    rating: 4.0,
    tags: ["City views", "Golden hour"],
    image: "/open-terrace-event-venue.jpg",
    category: "events",
  },
  {
    id: "12",
    title: "Gallery for Exhibitions",
    pricePerHour: 4800,
    rating: 4.7,
    tags: ["Track lights", "White cube"],
    image: "/art-gallery-exhibition-space.jpg",
    category: "exhibitions",
  },
]

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get("q") || "").toLowerCase()
  const min = Number(searchParams.get("min") || 0)
  const max = Number(searchParams.get("max") || Number.POSITIVE_INFINITY)
  const category = searchParams.get("category") || "all"
  const rating = Number(searchParams.get("rating") || 0)

  const data = spaces.filter((s) => {
    const qOk = !q || s.title.toLowerCase().includes(q) || s.tags.some((t) => t.toLowerCase().includes(q))
    const priceOk = s.pricePerHour >= min && s.pricePerHour <= max
    const catOk = category === "all" || s.category === category
    const ratingOk = s.rating >= rating
    return qOk && priceOk && catOk && ratingOk
  })

  return NextResponse.json({ data })
}
