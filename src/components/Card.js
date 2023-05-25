import Link from 'next/link';
import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Card = ({ data , name}) => {
  // console.log('data', data[0]?.items);
  return (
    <div className='flex flex-col w-full gap-5 justify-center items-center py-10'>
      <h2>
        Hasil Pencarian <span className='font-bold'> {name} </span> total : <span className="font-bold"> {data[0]?.items.length} </span>
      </h2>
      <div className="border-solid flex flex-col gap-10 border-[2px] rounded-xl border-stone-400 w-[40%] p-5">

        {
          data[0]?.items?.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between p-7 h-[70px] w-full">
                <div className="flex gap-5 items-center">
                  <img src={item?.avatar_url} alt="avatar" className='w-16  rounded-full'/>
                  <h5 className='font-semibold'>{item?.login}</h5>
                </div>
                <Link href={{
                  pathname: '/detail',
                  query:item,
                }} className="hover:scale-125 duration-300 flex items-center text-3xl">
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Card