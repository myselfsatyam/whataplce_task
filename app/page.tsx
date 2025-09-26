import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FilterBar } from "@/components/filter-bar"
import { SearchResults } from "@/components/search-results"

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-pretty">All Spaces</h1>
          <p className="mt-3 text-muted-foreground text-balance">Enjoy, browse & book the most unique locations</p>
        </div>

        <FilterBar />

        <SearchResults />
      </section>
      <SiteFooter />
    </main>
  )
}
