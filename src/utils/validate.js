 export const checkValidData =(email,password,Username)=>{
    //regular expressions for password , email, name there has to be followed if not it will show error
    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(Username);

    if(!isEmailValid)return "Email ID is not valid";
    if(!isPasswordValid) return "Incorrect Password";
     if(!isNameValid) return "Enter your correct name";

    return null;

}