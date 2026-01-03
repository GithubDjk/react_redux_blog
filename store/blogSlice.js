import axios from "axios";
import STATUSES from "../src/globals/status/statuses";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import API from "../src/http";

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
      const response = await API.get('blog')
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
      const response = await API.get(`blog/${id}`)
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
      const response = await API.delete(`blog/${id}`)
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
      const response = await API.post('blog', data)
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
      const response = await API.patch(`blog/${id}`, data)
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