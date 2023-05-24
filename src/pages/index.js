import axios from 'axios'
import { Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const index = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((result) => {
        console.log('res', result.data.results);
        setData(result.data.results)
      }).catch((err) => {
        console.log(err);
      });
  }, [])

  // console.log('data', data);

  return (
    <div className='w-full flex justify-center items-center mt-7 flex-col gap-10'>
      <h1 className='text-3xl font-semibold'>Data Pokemon</h1>
      <div className="w-full h-full p-4 justify-center items-center">
        <Table className=''>
          <Table.Head>
            <Table.HeadCell>
              Pokemon Name
            </Table.HeadCell>
            <Table.HeadCell>
              URL Pokemon
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
              Array.isArray(data) && data?.map((item) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <p className='capitalize'>{item?.name}</p>
                    </Table.Cell>
                    <Table.Cell>
                      <a target='_blank' href={item?.url}>{item?.url}</a>
                    </Table.Cell>
                  </Table.Row>
                </>
              ))

            }
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default index