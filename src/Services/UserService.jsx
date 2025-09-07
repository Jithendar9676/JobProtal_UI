import axios from "axios"
const base_url ="http://localhost:8080/users/"
const registerUser=async(user)=>{
    try{
const res=await axios.post(`${base_url}registerUser`,user)  
return res.data
    }catch{
        throw  error.response?.data || error.message
    }

}

const logInUser=async(login)=>{
try{
    const res=await axios.post(`${base_url}logInUser`,login)
    return res.data
} catch{
     throw  error.response?.data || error.message
}
}

export {registerUser,logInUser};