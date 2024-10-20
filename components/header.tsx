"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          enhance.io
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-foreground/80 hover:text-foreground">Features</Link>
          <Link href="#testimonials" className="text-foreground/80 hover:text-foreground">Testimonials</Link>
          <Link href="#pricing" className="text-foreground/80 hover:text-foreground">Pricing</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link href="#features" className="text-foreground/80 hover:text-foreground">Features</Link>
            <Link href="#testimonials" className="text-foreground/80 hover:text-foreground">Testimonials</Link>
            <Link href="#pricing" className="text-foreground/80 hover:text-foreground">Pricing</Link>
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full">Sign up</Button>
          </nav>
        </div>
      )}
    </header>
  );
}