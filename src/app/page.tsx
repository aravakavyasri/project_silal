import Link from 'next/link'

export default function Home() {
  return (
    <>
    <header>
      <h1 className='text-2xl'>Silal</h1>
      <Link  href="/productDetails" >Product Details</Link>
    </header>
    </>
    )
}
