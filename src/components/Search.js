import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Card from './Card'
import { Blocks } from 'react-loader-spinner'

const Search = () => {

    const [user, setUser] = useState()
    const [search, setSearch] = useState()
    const [res, setRes] = useState([])
    const [loading, setLoading] = useState(true)
    const api = 'https:/api.github.com/search/users?q='

    // https:/api.github.com/search/users?q=${user}&per_page=20
    const handleUser = (e) => {
        // console.log('e', e.target.value);
        setUser(e.target.value)
        setLoading(true)
    }

    // useEffect(() => {
    //     axios({
    //         url: `${api}${user}&per_page=20`,
    //     }).then((result) => {
    //         // console.log('result',result.data.items)
    //         setRes([result.data])
    //         setLoading(false)
    //     })
    // }, [])

    const handleSearch = () => {
        axios.get(`${api}${user}&per_page=20`)
            .then((result) => {
                // console.log('res', result.data.items)
                setRes([result.data])
                setLoading(false)
            }).catch((err) => console.log(err))
        
        // setSearch(user)

        // axios({
        //     url: `${api}${user}&per_page=20`,
        // }).then((result) => {
        //     // console.log('result',result.data.items)
        //     setRes([result.data])
        //     setLoading(false)
        // })
    }

    // console.log('res', res);

    return (
        <div className="flex flex-col w-full h-screen gap-14 items-center justify-start mt-[5%]">
            <div className='w-full justify-center flex items-center gap-5'>
                <img src="./assets/github-mark.png" alt="Image Github" className='w-52' />
                <h1 className='text-3xl font-semibold'>Cari Username <br /> <span className='font-bold'>GitHub</span></h1>
            </div>
            <div className=" flex gap-6 p-5 w-[50%] items-center justify-center">
                <input type="text" onChange={(e) => handleUser(e)} className='border-solid w-[50%] h-20 border-stone-400 rounded-xl border-[2px] p-5' />
                <button onClick={() => handleSearch()} className="p-5 bg-black rounded-lg text-white hover:scale-110 duration-300">
                    <AiOutlineSearch className='text-4xl' />
                </button>
            </div>

            {
                loading ?
                    <>
                        <Blocks
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                        />
                    </>
                    : <Card data={res} name={user} />

            }
        </div>
    )
}

export default Search