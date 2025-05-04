import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

const Header = () => {
  return (
    <div>
        <header className='fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60'>
          <nav className='container mx-auto px-4 flex items-center justify-between h-16'>
            <Link href="/">
             <Image 
             src="/logo.png" 
             alt="Logo" 
             width={200} 
             height={60}
             className='h-12 py-1 w-auto object-contain'
              />
            </Link>

            <div className='flex items-center space-x-2 md:space-x-4'>
              <SignedIn>
                <Link href="/dashboard">
                <Button variant={"outlined"}>
                  <LayoutDashboard className='h-4 w-4'/>
                  <span className='hidden md:block'>
                    Industry Insights
                  </span>
                </Button>
                </Link>
              

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className='h-4 w-4'/>
                  <span className='hidden md:block'>
                    Growth Tools
                  </span>
                  <ChevronDown className='h-4 w-4'/>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                  <Link href={"/resume"} className='flex items-center gap-2'>
                   <FileText className='h-4 w-4'/>
                   <span>Resume Builder</span>
                   </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>x
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                  </DropdownMenuItem>
              </DropdownMenuContent>
             </DropdownMenu>
             </SignedIn>

             <SignedOut>
               <SignInButton>
               <Button variant={"outline"}>Sign In</Button>
               </SignInButton>
             </SignedOut>

        <SignedIn>
        <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
        </SignedIn>

            </div>


          </nav>



        </header>
    </div>
  );
}

export default Header