import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { addBlog } from '../../../store/blogSlice'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const { status } = useSelector((state) => state.blog)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (blog) => {
    dispatch(addBlog(blog))
    if (status === STATUSES.SUCCESS) {
      navigate('/')
    }
  }

  return (
    <Layout>
      <Form type='Create' onSubmit={handleSubmit} />
    </Layout>
  )
}

export default AddBlog