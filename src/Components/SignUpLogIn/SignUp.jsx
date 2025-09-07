import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../Services/UserService";

const SignUp = () => {

    const form = {
        name :"",
            email :"",
            password : "",
            confirmPassword : "",
            accountType : ""
    }
    const [data, setData] = useState(form);

    const handleChange = (event) => {
        if(typeof(event)=="string")setData({...data,accountType:event})
        else setData({...data,[event.target.name]:event.target.value})
    console.log("data",data)
    }

  const handleSubmit = async () => {
  if (!data.name || !data.email || !data.password || !data.confirmPassword) {
    alert("All fields are required");
    return;
  }
  if (data.password !== data.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await registerUser(data);
    console.log("User registered:", res);
  } catch (error) {
    console.error("Registration failed:", error);
    alert(error);
  }
};

    return (
        <div className="w-1/2 flex flex-col justify-center px-20 gap-4">
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput withAsterisk
                value={data.name}
                name="name"
                onChange={handleChange}
                label="Full Name"
                placeholder="Your Name"
            />
            <TextInput withAsterisk
                value={data.email}
                name="email"
                onChange={handleChange}
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your Email"
            />
            <PasswordInput value={data.password} name="password"
                onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
            <PasswordInput value={data.confirmPassword} name = "confirmPassword"
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

            <div className="mx-auto">Have an account ? <Link to={"/login"} className="text-bright-sun-400 hover:underline">Login</Link></div>
        </div>
    )
}
export default SignUp;