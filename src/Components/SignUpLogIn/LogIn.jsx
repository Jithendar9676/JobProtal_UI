import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInUser } from "../../Services/UserService";
import { LoginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const LogIn = () => {

  const navigate =useNavigate()
    const form = {
        email: "",
        password: "",
    }
    const [data, setData] = useState(form);
    const [formError,setFormError]=useState(form);

    const handleChange = (event) => {
        setFormError({...formError,[event.target.name]:""})
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = async () => {
         let valid=true
                let newFormError={}
                for(let key in data){
                   
             newFormError[key]=LoginValidation(key,data[key])
                    if(newFormError[key]){
                        valid=false
                    }
                }
                setFormError(newFormError)
                if(valid){
        try {
            const res = await logInUser(data);
            console.log("Login success:", res);
        setData(form)
             notifications.show({
          title: 'Login Successfully',
          message: 'redirecting to home page...',
          withCloseButton:true,
          icon:<IconCheck style={{width:"90%",height:"90%"}}/>,
          color:"teal",
          withBorder:true,
          className:"!border-green-500"
        })

        setTimeout(()=>{
          navigate("/home")
        },4000)
        } catch (error) {
            console.log("Login failed:", error);
             notifications.show({
          title: 'Login Failed',
          message: error.response.data.message,
          withCloseButton:true,
          icon:<IconX style={{width:"90%",height:"90%"}}/>,
          color:"red",
          withBorder:true,
          className:"!border-red-500"
        })
        }
    }
    };
    return (
        <div className="w-1/2 flex flex-col justify-center px-20 gap-4">
            <div className="text-2xl font-semibold">Login Account</div>
            <TextInput withAsterisk
                value={data.email}
                error={formError.email}
                onChange={handleChange}
                name="email"
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your Email"
            />
            <PasswordInput error={formError.password} value={data.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
            <Button onClick={handleSubmit} autoContrast variant="filled">Log In</Button>

            <div className="mx-auto">Don't have an account ? <span onClick={()=>{navigate("/signup"); setData(form) ; setFormError(form)}} className="text-bright-sun-400 hover:underline cursor-pointer">Signup</span></div>
        </div>
    )
}
export default LogIn;