import axios from "axios"
const base_url ="http://localhost:8080/users/"
const registerUser=async(user)=>{
const res=await axios.post(`${base_url}registerUser`,user)  
return res.data

}

const logInUser=async(login)=>{

    const res=await axios.post(`${base_url}logInUser`,login)
    return res.data

}

export {registerUser,logInUser};