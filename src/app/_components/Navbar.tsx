"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex flex-row justify-between p-4">
      <h1 className="text-xl text-white">Gallery</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <UploadButton
          endpoint={"imageUploader"}
          onClientUploadComplete={() => router.refresh()}
        />
      </SignedIn>
    </nav>
  );
}
