import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="w-1/2 flex flex-col justify-center px-20 gap-4">
            <div className="text-2xl font-semibold">Login Account</div>
            <TextInput withAsterisk
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Your Email"
            />
            <PasswordInput withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
            <Button autoContrast variant="filled">Log In</Button>

            <diV className="mx-auto">Don't have an account ? <Link to={"/signup"} className="text-bright-sun-400 hover:underline">Signup</Link></diV>
        </div>
    )
}
export default LogIn;