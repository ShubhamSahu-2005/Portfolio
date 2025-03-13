
import Particles from "./components/particles";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen bg-black">
        {/* Particles Background */}
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        {/* Navbar Container */}
        <div className="absolute top-0 left-0 w-full z-10">
          <nav className="flex items-center justify-between p-6 text-white font-mono">
            {/* Logo */}
            <Link href="/" className="text-xl font-medium">
              Shubham Sahu
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/work" className="hover:underline">
                work
              </Link>
              <Link href="/skills" className="hover:underline">
                skills
              </Link>
              <Link href="/about" className="hover:underline">
                about
              </Link>
              <Link href="/resume" className="hover:underline">
                resume
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black text-white">
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/work" className="text-lg hover:underline">
                    work
                  </Link>
                  <Link href="/skills" className="text-lg hover:underline">
                    skills
                  </Link>
                  <Link href="/about" className="text-lg hover:underline">
                    about
                  </Link>
                  <Link href="/resume" className="text-lg hover:underline">
                    resume
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </nav>

          <main className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-24 max-w-6xl text-white mx-auto">
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <p>i&apos;m Shubham Sahu--</p>
            <p className="max-w-xl">
              a software engineer, problem solver, tech enthusiast, gamer, coffee lover, and a full-stack developer at
              Tech Solutions Inc.
            </p>
          </div>
          <p>
            i&apos;m working on a new version of this portfolio{" "}
            <Link href="#" className="underline">
              here!
            </Link>
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <div className="relative w-full aspect-square max-w-md mx-auto">
         
          </div>
        </div>
      </main>
        </div>
      </div>
    </>
  );
}

