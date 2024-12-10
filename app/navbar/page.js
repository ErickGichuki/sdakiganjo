import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav className="bg-blue-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg font-bold flex items-center">
        <Image src='/logo.png'alt="Church Logo" width={40} height={40} className="mr-4 bg-blue-800 rounded-3xl text-4xl" />
        <Link href="/">Seventh-day Adventist Kiganjo Church</Link>
      </h1>
      <ul className="flex space-x-4">
        {['Home', 'About', 'Members', 'Giving', 'Events', 'Beliefs', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`} className="hover:text-yellow-600">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
