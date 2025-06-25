import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: { name: string; href: string }[];
}

const Card: React.FC<propsType> = ({title, desc, img, tags }) => { 
  return (
    <div className='border border-[#ad40bb] max-w-xs w-full'>
        <div>
            <Image className= 'w-full h-[200px] object-cover'
            src={img}
            width={300}
            height={500}
            alt={title}
            />
        </div>

    <div className='p-5 space-y-2'>
        <div className='text-2xl font-extralight'> {title} </div>
           <div> {desc} </div>
             <div>
                {tags.map((el) => (
                <div className='tags' key={el.name}>
                    <a href={el.href} target="_blank" rel="noopener noreferrer">
                        {el.name}
                    </a>
                </div> ))}
            </div>
        </div>
    </div>
  );
};

export default Card;