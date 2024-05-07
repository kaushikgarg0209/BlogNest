import HomeImg from '../../public/Home.png'
import { Typography, Button } from '@mui/material';

import Image
 from 'next/image';
export default function Home() {
  return (
    <section className="hero-section flex items-center justify-between h-screen text-black">
    <div className="text-container max-w-2xl mx-auto px-4">
      <Typography className="text-4xl md:text-6xl font-bold mb-5">Welcome to Blog Nest</Typography>
      <Typography className="text-lg md:text-xl mb-8">This is where you'll find amazing content and Dive in and explore!</Typography>
      <a href="/create-blog" className="bg-[#222831] hover:bg-[#393E46] text-white font-bold py-3 px-6 rounded-lg text-lg">Create Blog</a>
    </div>
    {/* Image on one side */}
    <div className="image-container hidden md:block w-1/2">
      <Image src={HomeImg} alt="Image description" className="w-full h-full object-cover" />
    </div>
  </section>
  );
}
