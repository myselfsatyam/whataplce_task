import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-10 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-(--brand) text-(--brand-foreground) p-6 sm:p-10 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10">
            <div className="md:flex-1">
              <div className="font-serif text-2xl sm:text-3xl">whattaplace</div>
              <div className="mt-4 text-sm/6 opacity-90">
                <div>Instagram</div>
                <div className="mt-2">knock@whattaplace.com</div>
              </div>
            </div>

            <div className="md:flex-[2] w-full">
              <div className="flex items-center gap-6 justify-start md:justify-end flex-wrap">
                <Link className="opacity-95 hover:opacity-100" href="#find">
                  Find a Space
                </Link>
                <Link className="opacity-95 hover:opacity-100" href="#host">
                  Host a Place
                </Link>
                <Link className="opacity-95 hover:opacity-100" href="#how">
                  How it Works
                </Link>
                <Link
                  className="rounded-full bg-background text-foreground px-4 py-2 border border-black/10 hover:bg-background/90"
                  href="#contact"
                >
                  Get in Touch
                </Link>
              </div>

              <div className="mt-10 text-xs/6 flex flex-wrap items-center gap-x-6 gap-y-3 opacity-90">
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Cancellation & Refund Policy</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Cookies</Link>
                <Link href="#">Code of Conduct</Link>
                <span className="ml-auto">© 2025 Plenusvita - All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
