import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs, setBlog } from '../../../store/blogSlice'
import { setStatus } from '../../../store/authSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.blog)
  useEffect(() => {
    dispatch(fetchBlogs())
    dispatch(setStatus(null))
  }, [])

  return (
    <Layout>
      <div className='flex flex-wrap justify-center space-x-5 mt-6'>
        {
          data?.length > 0 && data.map((blog) => {
            return (<Card key={blog._id} blog={blog} />)
          })
        }
      </div>
    </Layout>
  )
}

export default Home