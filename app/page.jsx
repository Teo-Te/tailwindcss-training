import Link from 'next/link';
import { Providers } from "@/app/providers";
import ThemeSwitch from '@/components/ThemeSwitch2';

export default function Home() {

  return (
    <Providers>
      <ThemeSwitch />
      <div> 
        <h1>TailwindCSS Training</h1>
        <div className='flex flex-col'>
          <Link href="/emailSub">Email Sub</Link>
          <Link href="/priceGrids">Price Cards</Link>
          <Link href="/productModal">Product Modal</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/login">Log In</Link>
          <Link href="/clipboard">Clipboard</Link>
          <Link href="/loopStudios">Loop Studios</Link>
          <Link href="/shortly">Shortly</Link>
          <Link href="/testimonial-grid">Testimonial Grid</Link>
          <Link href="/fylo">Fylo</Link>
          <Link href="/bookmark">Bookmark</Link>
        </div>
      </div>
    </Providers>
  );
}
