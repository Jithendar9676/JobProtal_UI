const SignUpValidation=(name,value)=>{
    switch(name){
        case "name":
            if(value.length===0){
                return "Name is required."
            }
            else return ""
        case "email":
            if(value.length===0){
                return "Email is required."
            }
            if(!/^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/.test(value)){
                return "Email is invalid."
            }
            else return ""
        case "password":
            if(value.length===0){
                return "Password is required."
            }
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#\$%\^&\*])[A-Za-z\d@!#\$%\^&\*]{8,15}$/.test(value)){
                return "password must be 8-15 characters with at least one uppercase,lowercase,number,special character."
            }
            else return ""
    }


}
const LoginValidation=(name,value)=>{
switch(name){
        case "email":
            if(value.length===0){
                return "Email is required."
            }
            else return ""
        case "password":
            if(value.length===0){
                return "Password is required."
            }
            else return ""
    }
}

export { SignUpValidation,LoginValidation};