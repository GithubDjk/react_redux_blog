import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import STATUSES from '../../globals/status/statuses'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editBlog, fetchBlog } from '../../../store/blogSlice'

const EditBlog = () => {
  const { status, blog } = useSelector((state) => state.blog)
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (blog) => {
    dispatch(editBlog(id, blog))
    if (status === STATUSES.SUCCESS) {
      navigate('/')
    }
  }

  useEffect(() => {
    dispatch(fetchBlog(id))
  }, [])

  return (
    <Layout>
      <Form type='Edit' onSubmit={handleSubmit} blogdata={blog} />
    </Layout>
  )
}

export default EditBlog