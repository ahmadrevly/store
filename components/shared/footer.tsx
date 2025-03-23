"use client";

import { ChevronUp, Link } from "lucide-react";
import { Button } from "../ui/button";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button className="bg-gray-800 w-full rounded-none" variant='ghost' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <ChevronUp className="mr-2 h-4 w-4" />
        Back to Top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/conditions-of-use">Condition Of Use</Link>
          <Link href="/page/privacy-policy">Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div>
          <p>&copy;2000-2025, {APP_NAME}, Inc. or its affiliates</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          1234 Main St, Springfield, IL 62701
        </div>
      </div>
    </footer>
  )
}