import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports

import axios from 'axios'

// ** Fetch Users

export const fetchData = createAsyncThunk('courses/fetchData', async params => {
  const response = await axios.get('/apps/courses/list', {
    params
  })
  
return response.data
})

// ** Add User
export const addCourse = createAsyncThunk('courses/addCourse', async (data, { getState, dispatch }) => {
  const response = await axios.post('/apps/courses/add-course', {
    data
  })
  dispatch(fetchData(getState().user.params))
  
return response.data
})

// ** Delete User
export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id, { getState, dispatch }) => {
  const response = await axios.delete('/apps/courses/delete', {
    data: id
  })
  dispatch(fetchData(getState().user.params))

  return response.data
})

export const coursesSlice = createSlice({
  name: 'coursesSlice',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.users
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default coursesSlice.reducer
