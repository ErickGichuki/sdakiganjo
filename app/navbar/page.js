import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg font-bold">
        <Link href="/">Church Name Seventh-day Adventist Church</Link>
      </h1>
      <ul className="flex space-x-4">
        {['Home', 'About', 'Members', 'Community', 'Events', 'Giving', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`} className="hover:underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
