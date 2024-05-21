import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  if (!images) return null;

  return (
    <div className="flex flex-wrap gap-4 ">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Image src={image.url} alt={image.name} width={480} height={480} />

          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
