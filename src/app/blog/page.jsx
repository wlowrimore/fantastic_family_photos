import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
  mutate();
}

export const metadata = {
  title: 'REWTZ Blog',
  description: 'View blog entries created by your family members'
}

const Blog = async () => {
  const data = await getData()

  return (
    <div className='flex flex-col justify-center gap-10 my-24'>
      {data.map((item) => (
        <div key={item._id}>
          <Link href={`/blog/${item._id}`} className='flex flex-col lg:flex-row w-full lg:items-center lg:gap-10 px-4'>
            <div>
              <Image
                src={item.img}
                alt='uploaded pic'
                width={400}
                height={250}
                className='transform hover:scale-105 hover:rounded-3xl duration-300'
              />
            </div>
            <div className='text-justify'>
              <h1 className='text-xl lg:text-3xl font-bold tracking-wide'>{item.title}</h1>
              <p className='text-sm lg:text-lg font-semibold'>{item.desc}</p>
              <p className='text-xs lg:text-sm tracking-wide text-red-500'>Posted by: {item.username}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Blog