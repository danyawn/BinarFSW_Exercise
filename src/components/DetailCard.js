import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowUpRight } from 'react-icons/bs';

const DetailCard = () => {
    const router = useRouter()
    const data = router.query;
    // console.log('data ', data?.url);
    const [user, setUser] = useState()

    const fetchData =  async () => {
        await axios.get(`${data?.url}`)
        .then((result) => {
            // console.log('res get', result.data);
            setUser(result.data)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
    },[data])

    return (
        <div className='w-full h-full flex flex-col gap-12 justify-center items-center p-10'>
            <div className="flex justify-between w-full">
                <Link href={'/'} className='flex gap-3 justify-center items-center hover:scale-125 duration-300'>
                    <BsArrowLeft/> Back
                </Link>
                <h1 className='text-4xl'>Visit to {data?.login} GitHub</h1>
            </div>
            <div className="border-[2px] flex flex-col gap-6 items-center justify-center border-stone-400 border-solid rounded-xl w-full h-full p-7">
                <img src={data?.avatar_url} alt="avatar" className='w-56 rounded-full' />
                <h2 className='text-3xl font-bold uppercase'>{data?.login}</h2>

                <div className="flex flex-col items-start justify-center">
                    <h4>Bio : &apos; {user?.bio} &apos;</h4>
                    <h4>Now At : {user?.company}</h4>
                    <h4>Location : {user?.location}</h4>
                    <h4>Followers : {user?.followers}</h4>

                </div>

                <a target='_blank' className='p-5 flex gap-4 items-center justify-center hover:scale-110 duration-300 rounded-xl bg-slate-600 text-white' href={data?.html_url}>
                    <p>Visit GitHub</p>
                    <BsArrowUpRight />
                </a>
            </div>

        </div>
    )
}

export default DetailCard