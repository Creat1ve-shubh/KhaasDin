
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
  
    <nav className="fixed z-10 top-0 left-1/2  m-8 transform -translate-x-1/2 bg-opacity-30 hover:bg-opacity-20 bg-gray-800  text-white py-2 px-8 rounded-md">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Dhamaka(S)</Link>
        </li>
        <li>
          <Link href="/SugarCube">SugarCube(H)</Link>
        </li>
        <li>
          <Link href="/Wall">454 (R)</Link>
        </li>
        <li>
          <Link href="/News">Taaza Khabar(E)</Link>
        </li>
        <li>
          <Link href="/Onemorething">One more thing..(Y)</Link>
        </li>
        <li>
          <Link href="/End">Akhri Shabd...(A)</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
