import Image from 'next/image'
import Reunion from '/public/reunion.jpg';

const About = () => {
  return (
    <div className='container'>
      <div className='w-full h-[18rem] overflow-y-hidden'>
        <Image src={Reunion} className='w-full' alt='family reunion' />
        <div className='absolute top-[23rem] left-[20rem] bg-teal-600/60 rounded text-white px-4 py-2 leading-snug'>
          <h1 className='text-2xl font-semibold'>Unveiling History</h1>
          <h2 className='text-xl font-semibold'>Helping families connect one leaf at a time.</h2>
        </div>
      </div>
      <div className='flex gap-20 mb-6'>
        <div className='flex flex-col'>
          <h1 className='text-4xl font-semibold py-6'>Title Number One</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Aliquet eget sit amet tellus cras adipiscing. In hendrerit gravida rutrum quisque. Tincidunt nunc pulvinar sapien et ligula. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Duis ut diam quam nulla porttitor massa. Eu turpis egestas pretium aenean pharetra. Risus ultricies tristique nulla aliquet enim. Nam libero justo laoreet sit amet cursus sit amet dictum. Nunc non blandit massa enim nec dui nunc mattis. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Sed felis eget velit aliquet sagittis id consectetur. Nec ultrices dui sapien eget. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Porta lorem mollis aliquam ut porttitor leo a. At in tellus integer feugiat scelerisque varius. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Scelerisque varius morbi enim nunc.

            Dictum varius duis at consectetur lorem donec massa sapien faucibus. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Egestas maecenas pharetra convallis posuere. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Vel eros donec ac odio tempor orci dapibus ultrices in. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Donec enim diam vulputate ut pharetra. Sit amet nulla facilisi morbi tempus iaculis urna. Pulvinar mattis nunc sed blandit libero volutpat. Purus in mollis nunc sed id.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-4xl font-semibold py-6'>Title Number Two</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Aliquet eget sit amet tellus cras adipiscing. In hendrerit gravida rutrum quisque. Tincidunt nunc pulvinar sapien et ligula. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Duis ut diam quam nulla porttitor massa. Eu turpis egestas pretium aenean pharetra. Risus ultricies tristique nulla aliquet enim. Nam libero justo laoreet sit amet cursus sit amet dictum. Nunc non blandit massa enim nec dui nunc mattis. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Sed felis eget velit aliquet sagittis id consectetur. Nec ultrices dui sapien eget. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Porta lorem mollis aliquam ut porttitor leo a. At in tellus integer feugiat scelerisque varius. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Scelerisque varius morbi enim nunc.

            Dictum varius duis at consectetur lorem donec massa sapien faucibus. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Egestas maecenas pharetra convallis posuere. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Vel eros donec ac odio tempor orci dapibus ultrices in. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Donec enim diam vulputate ut pharetra. Sit amet nulla facilisi morbi tempus iaculis urna. Pulvinar mattis nunc sed blandit libero volutpat. Purus in mollis nunc sed id.</p>
        </div>
      </div>
    </div>
  )
}

export default About