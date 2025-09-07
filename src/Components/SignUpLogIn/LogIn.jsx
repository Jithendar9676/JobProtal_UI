import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logInUser } from "../../Services/UserService";

const LogIn = () => {
    
        const form = {
                email :"",
                password : "",
        }
        const [data, setData] = useState(form);
    
        const handleChange = (event) => {
            setData({...data,[event.target.name]:event.target.value})
        }
      const handleSubmit = async () => {
  if (!data.email || !data.password) {
    alert("Email and password are required");
    return;
  }

  try {
    const res = await logInUser(data);
    console.log("Login success:", res);
  } catch (error) {
    console.error("Login failed:", error);
    alert(error);
  }
};
    return (
        <div className="w-1/2 flex flex-col justify-center px-20 gap-4">
            <div className="text-2xl font-semibold">Login Account</div>
            <TextInput withAsterisk
                value={data.email}
                onChange={handleChange}
                name="email"
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your Email"
            />
            <PasswordInput value={data.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
            <Button onClick={handleSubmit} autoContrast variant="filled">Log In</Button>

            <div className="mx-auto">Don't have an account ? <Link to={"/signup"} className="text-bright-sun-400 hover:underline">Signup</Link></div>
        </div>
    )
}
export default LogIn;