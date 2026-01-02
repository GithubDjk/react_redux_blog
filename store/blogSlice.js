import axios from "axios";
import STATUSES from "../src/globals/status/statuses";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    data: null,
    blog: null,
    status: null
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload
    },
    setBlog(state, action) {
      state.blog = action.payload
    }
  }
})

export const { setData, setStatus, setBlog } = blogSlice.actions
export default blogSlice.reducer

export function fetchBlogs() {
  return async function fetchBlogsThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING))
    try {
      const URL = 'https://react30.onrender.com/api/user/blog'
      const response = await axios.get(URL)
      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS))
        dispatch(setData(response.data.data))
      } else {
        dispatch(setStatus(STATUSES.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR))
    }
  }
}

export function fetchBlog(id) {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING))
    try {
      const URL = `https://react30.onrender.com/api/user/blog/${id}`
      const response = await axios.get(URL)
      if (response.status === 200) {
        dispatch(setBlog(response.data.data))
        dispatch(setStatus(STATUSES.SUCCESS))
      } else {
        dispatch(setStatus(STATUSES.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR))
    }
  }
}

export function deleteBlog(id) {
  return async function deleteBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING))
    try {
      const URL = `https://react30.onrender.com/api/user/blog/${id}`
      const response = await axios.delete(URL, {
        headers: {
          Authorization: localStorage.getItem('jwttoken')
        }
      })

      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS))
      } else {
        dispatch(setStatus(STATUSES.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR))
    }
  }
}

export function addBlog(data) {
  return async function addBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING))
    try {
      const URL = `https://react30.onrender.com/api/user/blog`
      const response = await axios.post(URL, data, {
        headers: {
          Authorization: localStorage.getItem('jwttoken'),
          "Content-Type": "multipart/form-data"
        }
      })
      if (response.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS))
      } else {
        dispatch(setStatus(STATUSES.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR))
    }
  }
}

export function editBlog(id, data) {
  return async function editBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING))
    try {
      const URL = `https://react30.onrender.com/api/user/blog/${id}`
      const response = await axios.patch(URL, data, {
        headers: {
          Authorization: localStorage.getItem('jwttoken'),
          "Content-Type": "multipart/form-data"
        }
      })
      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS))
      } else {
        dispatch(setStatus(STATUSES.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR))
    }
  }
}