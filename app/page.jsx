import Link from 'next/link';

export default function Home() {
  return (
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
      </div>
    </div>
  );
}
