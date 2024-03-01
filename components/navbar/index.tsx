
import Link from "next/link"

export function Navbar() {
    return (
        <header className="fixed top-0 z-30 w-full flex items-center justify-center pt-8 pb-4">
            <div className="px-12">
                <Link href="/">
                    <img className="h-8 select-none" src="/logo.svg" />
                </Link>
            </div>
            <div className="flex-1 flex justify-center gap-8 text-xl font-semibold select-none">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="https:/github.com/lucas7maciel">Repo</Link>
            </div>
            <div className="px-12">
                <img className="h-8 select-none" src="/dark.svg" />
            </div>
        </header>
    )
}