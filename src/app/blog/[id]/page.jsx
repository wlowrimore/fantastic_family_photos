import Image from 'next/image'
import React from 'react'


const BlogPost = () => {
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col gap-y-6'>
          <h1 className='w-4/5 text-5xl font-bold'>This is where the title will be positioned for entry.</h1>
          <p>In Harry’s world fate works not only through powers and objects such as prophecies, the Sorting Hat, wands, and the Goblet of Fire, but also through people. Repeatedly, other characters decide Harry’s future for him, depriving him of freedom and choice. For example, before his eleventh birthday, the Dursleys control Harry’s life, keeping from him knowledge of his past and understanding of his identity (Sorcerer’s 49).</p>
          <div className='flex flex-col'>
            <Image
              src='https://images.pexels.com/photos/819370/pexels-photo-819370.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
              width={50}
              height={50}
              className='rounded-[50%]'
            />
            <span className='text-sm tracking-wider mt-1'>fatkat77</span>
          </div>
        </div>
        <div className='h-[19rem] relative'>
          <Image
            src='https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1600'
            fill={true}
            className='object-cover pl-12'
          />
        </div>
      </div>
      <div className='mt-10 text-justify'>
        <p>
          A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences in a paragraph to determine the subject and perspective of the paragraph. That’s why it’s often best to put the topic sentence at the very beginning of the paragraph. In some cases, however, it’s more effective to place another sentence before the topic sentence—for example, a sentence linking the current paragraph to the previous one, or one providing background information.
          <br /><br />
          Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence. For example, you might be able to omit a topic sentence in a paragraph that narrates a series of events, if a paragraph continues developing an idea that you introduced (with a topic sentence) in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence.
        </p>
      </div>
      {/* <div className='flex justify-between'>
        <div className='flex-1 items-center'>
          <h1 className='text-4xl font-bold'>This is where the title will be positioned for each entry.</h1>
          <p className='desc'>
            ;lakjsdf;lkajsd;flkajsdl;fkjpofiqwepoiruq;lwekrjq;lwekjrpouiasd9f87zxc9v87asoiduf;qlwkjerowqiufa8sd7voiasudlrjewkqoepfoiuasdlkfjq
          </p>
          <div className='author'>
            <Image
              src='https://images.pexels.com/photos/819370/pexels-photo-819370.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
              width={40}
              height={40}
              className='rounded-[50%]'
            />
            <span>username</span>
          </div>
          <div className='flex-1 h-[19rem] relative items-center'>
            <Image
              src='https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1600'
              fill={true}
              className='object-cover'
            />
          </div>
        </div>
        <div className='content'>
          <p className='body'>
            ;lkjsogiufdkjlgwpoertk;lfbouxcgqrtj194851;l45b;skdjffgpoiweur-rt981734o5iuwrlgkjsoiutq8e475oiurlwejkgrlgksjfdl;gkjwsjproiut1398475
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default BlogPost