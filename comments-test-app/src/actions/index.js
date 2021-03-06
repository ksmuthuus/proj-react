import axios from 'axios'
import {CREATE_COMMENT, FETCH_COMMENT, AUTH_STATUS} from 'actions/types'

export const postCommentAction = function(comment){
  return {
    type: CREATE_COMMENT,
    payload:{
      id:Math.floor(Math.random() * 10000),
      text:comment
    }
  }
}


export const getCommentAction = async function(comment){
  const result = await axios.get('http://jsonplaceholder.typicode.com/comments')
  return({
    type: FETCH_COMMENT,
    payload: result.data
  })
}

export const changeAuthStatus = function(isSignIn){
  return({
    type: AUTH_STATUS,
    payload:isSignIn
  })
}