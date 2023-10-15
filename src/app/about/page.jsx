import Image from 'next/image'
import Reunion from '/public/reunion.jpg';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className='container my-32 lg:my-24 px-4 lg:px-0'>
      <div className='w-full lg:h-[18rem] relative overflow-y-hidden'>
        <Image src={Reunion} className='w-full' alt='family reunion' />
        <div className='absolute lg:bottom-4 lg:left-4 bg-teal-600/60 lg:rounded text-white px-4 py-2 leading-snug'>
          <h1 className='text-lg lg:text-2xl font-semibold'>Unveiling History</h1>
          <h2 className='text-sm lg:text-xl font-semibold'>Helping families connect one leaf at a time.</h2>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 lg:mb-6'>
        <div className='flex flex-col'>
          <h1 className='text-2xl lg:text-4xl font-semibold pt-4 lg:py-6'>Who We Are</h1>
          <p className='text-sm lg:text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Aliquet eget sit amet tellus cras adipiscing. In hendrerit gravida rutrum quisque. Tincidunt nunc pulvinar sapien et ligula. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Duis ut diam quam nulla porttitor massa. Eu turpis egestas pretium aenean pharetra. Risus ultricies tristique nulla aliquet enim.
            <br />
            <br />
            Nam libero justo laoreet sit amet cursus sit amet dictum. Nunc non blandit massa enim nec dui nunc mattis. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Sed felis eget velit aliquet sagittis id consectetur. Nec ultrices dui sapien eget. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Porta lorem mollis aliquam ut porttitor leo a. At in tellus integer feugiat scelerisque varius. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Scelerisque varius morbi enim nunc.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl lg:text-4xl font-semibold pt-4 lg:py-6'>What We Offer</h1>
          <p className='text-sm lg:text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Aliquet eget sit amet tellus cras adipiscing. In hendrerit gravida rutrum quisque. Tincidunt nunc pulvinar sapien et ligula. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Duis ut diam quam nulla porttitor massa. Eu turpis egestas pretium aenean pharetra. Risus ultricies tristique nulla aliquet enim.
            <br />
            <br />
            - Something Here
            <br />
            <br />
            - Something Else Here
            <br />
            <br />
            - Another Something Here
          </p>
          <div className='mt-4'>
            <Button url='/contact' text='Contact' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About