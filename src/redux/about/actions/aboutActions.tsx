import axios from "axios";
// import LocalStorageService from './services/storage/localstorageservice'
import { dataModelAbout } from "../../../model";
import {
  FETCH_ABOUT_FAILURE,
  FETCH_ABOUT_REQUEST,
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_DATA,
} from "../aboutTypes";

// axios.interceptors.request.use(
//   (req:any) => {
//   //   const userLocal:any=localStorage.getItem('user')
//   // if(userLocal){
//   //   const user:any=JSON.parse(userLocal)
//   //   request.headers.Authorization=`Bearer ${user?.token}`
//   // }
// // const userLocal:any=localStorage.getItem('token')
// //   if(userLocal){
// //     const user:any=JSON.parse(userLocal)
// //     return req.headers.Authorization=`Bearer ${user}`
// //   }
//     return req.headers.Authorization=`Bearer ${"dfdsfsdf"}`

//   },
//   (err) => {
//      return Promise.reject(err);
//   }
// );



export const fetchAboutRequest = () => {
  return {
    type: FETCH_ABOUT_REQUEST,
  };
};

export const fetchAboutSuccess = (About: dataModelAbout) => {
  return {
    type: FETCH_ABOUT_SUCCESS,
    payload:About
  };
};
export const fetchAboutFailure = (error: string) => {
  return {
    type: FETCH_ABOUT_FAILURE,
    payload:error
  };
};

export const fetchAbout = () => {
    const userLocal:any=localStorage.getItem('token')
  if(userLocal){
    const user:any=JSON.parse(userLocal)
    

  return (dispatch:any) => {
    axios({
      method: 'get',
      url: "http://localhost:5000/api/v1/about",
      headers:{Authorization:`Bearer ${user}`}
    })
      .then((response) => {
      
        // console.log(response,"qqqqqqqqqqqqqqqqqqq");
        
        const about = response.data;
        dispatch(setAbout);
        // console.log("vvvvvvvvvvvvvv", about);
        
        dispatch(fetchAboutSuccess(about));
      })
      .catch((error) => {
        // console.log(error,"vvvvvvvvvvddddddddddddddddddddddd");
        
        const errorMsg = error.message;
        dispatch(fetchAboutFailure(errorMsg));
      });
  };
}
};

export const setAbout = (data:any)=>{
  return {
        type: FETCH_ABOUT_DATA,
        payload: data
}
}
// console.log(setAbout,"aaa");
