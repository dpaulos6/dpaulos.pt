import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-4 left-1/2 z-50 h-16 w-1/2 -translate-x-1/2 rounded-full bg-background/75 backdrop-blur-sm">
      <nav className="flex h-16 items-center justify-between px-4">
        <div className="cursor-target px-2 py-1 font-bold text-lg underline-offset-4 hover:underline">
          dpaulos
        </div>
        <ul className="flex gap-4">
          <li className="cursor-target px-2 py-1 underline-offset-4 hover:underline">
            Home
          </li>
          <li className="cursor-target px-2 py-1 underline-offset-4 hover:underline">
            Projects
          </li>
          <li className="cursor-target px-2 py-1 underline-offset-4 hover:underline">
            Contact
          </li>
        </ul>
        <div className="flex gap-4">
          <Button className="cursor-target rounded-full bg-primary px-4 py-2 text-sm text-white">
            Sign In
          </Button>
        </div>
      </nav>
    </header>
  );
}
