import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../../store/blogSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.blog)
  useEffect(() => {
    dispatch(fetchBlogs())
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