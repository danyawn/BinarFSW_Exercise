import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/users'

// fake api
// https://mocki.io/v1/a796ef1d-1f42-4ee6-891d-a9cd66e533d3

const index = () => {

  const store = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      fetchUsers()
    )
  }, [dispatch])

  console.log('store', store)
  return (
    <div>
      data
    </div>
  )
}

export default index