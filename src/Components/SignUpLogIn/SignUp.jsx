import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { notifications } from "@mantine/notifications";
import { SignUpValidation } from "../../Services/FormValidation";

const SignUp = () => {
 const navigate =useNavigate()
    const form = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT"
    }
    const [data, setData] = useState(form);
    const [formError,setFormError]=useState(form);
    
    const handleChange = (event) => {
        if (typeof (event) == "string") setData({ ...data, accountType: event })
            let name=event.target.name
            let value= event.target.value
         setData({ ...data, [name]: value })
         setFormError({...formError,[name]:SignUpValidation(name,value)})
         if(name==="password" &&data.confirmPassword !=""){
            let err=""
            if(value !==data.confirmPassword){
                err="password do not match."
                setFormError({...formError,[name]:SignUpValidation(name,value),confirmPassword:err})
            }
         }
         if(name === "confirmPassword"){
            if(value !==data.password){
                setFormError({...formError,[name]:"password do not match."})
            }
         }
        console.log("data", data)
    }

    const handleSubmit = async () => {
        let valid=true
        let newFormError={}
        for(let key in data){
            if(key==="accountType") continue
            if(key!=="confirmPassword"){
                newFormError[key]=SignUpValidation(key,data[key])
            }
            else if(data[key]!==data["password"]){
                newFormError[key]="Password do not match."
            }
            if(newFormError[key]){
                valid=false
            }
        }
        setFormError(newFormError)
        if(valid){
        try {
            const res = await registerUser(data);
            console.log("User registered:", res);
            setData(form)
             notifications.show({
          title: 'Registered Successfully',
          message: 'redirecting to login page...',
          withCloseButton:true,
          icon:<IconCheck style={{width:"90%",height:"90%"}}/>,
          color:"teal",
          withBorder:true,
          className:"!border-green-500"
        })

        setTimeout(()=>{
          navigate("/login")
        },4000)
        } catch (error) {
            console.log("Registration failed:", error);
             notifications.show({
          title: 'Registration Failed',
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
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput withAsterisk
                value={data.name}
                error={formError.name}
                name="name"
                onChange={handleChange}
                label="Full Name"
                placeholder="Your Name"
            />
            <TextInput withAsterisk
                value={data.email}
                error={formError.email}
                name="email"
                onChange={handleChange}
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your Email"
            />
            <PasswordInput value={data.password} name="password"
            error={formError.password}
                onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
            <PasswordInput value={data.confirmPassword} name="confirmPassword"
            error={formError.confirmPassword}
                onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Confirm Password" placeholder="Confirm Password" />
            <Radio.Group
                value={data.accountType}
                name="accountType"
                onChange={handleChange}
                label="You are ?"
                withAsterisk
            >  <Group mt="xs">
                    <Radio className="py-4 px-6 border hover:bg-mine-shaft-950 has-[checked]:bg-bright-sun-400/50 has-[checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg" autoContrast value="APPLICANT" label="Applicant" />
                    <Radio className="py-4 px-6 border  hover:bg-mine-shaft-950 has-[checked]:bg-bright-sun-400/50 has-[checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg" autoContrast value="EMPLOYER" label="Employer" />
                </Group>
            </Radio.Group>
            <Checkbox autoContrast
                label={<>I accepet {' '} <Anchor>terms & conditions</Anchor> </>}
            />
            <Button onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>

            <div className="mx-auto">Have an account ? <span onClick={()=>{navigate("/login"); setFormError(form); setData(form)}} className="text-bright-sun-400 hover:underline cursor-pointer">Login</span></div>
        </div>
    )
}
export default SignUp;