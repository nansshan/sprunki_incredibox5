import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-sprunki-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center h-full">Sprunki Incredibox</Link>
        <ul className="flex space-x-4 items-center h-full">
          <li><Link href="/" className="hover:text-sprunki-yellow flex items-center h-full transition duration-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-sprunki-yellow flex items-center h-full transition duration-300">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}