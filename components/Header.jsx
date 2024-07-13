import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"
import MoblieNav from "./MoblieNav"

const Header= () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Maheen<span className="text-accent">.</span>
                </h1>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button>Hire Me</Button>
                </Link>
            </div>

            <div className="xl:hidden">
                <MoblieNav/>
            </div>
        </div>
    </header>
  )
}

export default Header