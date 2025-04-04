'use client';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav style={{ padding: '10px', background: '#f4f4f4' }}>
      <Link href="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link href="/shop" style={{ marginRight: '15px' }}>Alcoholic</Link>
      <Link href="/nonAlcohol" style={{ marginRight: '15px' }}>Non alcoholic</Link>
      <Link href="/checkout">Cart</Link>
    </nav>
  );
};

export default Navbar;