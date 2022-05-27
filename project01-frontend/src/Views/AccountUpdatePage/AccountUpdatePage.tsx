import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../Components/Navbar/Navbar";
import { IUser } from "../../Interfaces/IUser";
import { updateUser } from "../../Slices/userSlice";
import { AppDispatch, RootState } from "../../store";

export const AccountUpdatePage: React.FC = () =>{
    const userState = useSelector((state:RootState)=> state.user.user)
    const dispath:AppDispatch = useDispatch();
    const [firstName,setFirstName] = useState(userState?.firstName);
    const [lastName,setLastName] = useState(userState?.lastName);
    const [userName,setUserName] = useState(userState?.username);
    const [password,setPassword] = useState(userState?.password);
    const [email,setEmail] = useState(userState?.email);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "firstName"){
            setFirstName(e.target.value);
        }else if(e.target.name === "lastName"){
            setLastName(e.target.value);
        }else if(e.target.name === "userName"){
            setUserName(e.target.value);
        }else if(e.target.name === "password"){
            setPassword(e.target.value);
        }else {
            setEmail(e.target.value);
        }
    }
    const handleClick = () =>{
            let user:IUser = {
                firstName: firstName ? firstName : "",
                lastName: lastName ? lastName : "",
                username: userName ? userName : "",
                password: password ? password : "",
                email: email ? email : ""
            }
            dispath(updateUser(user));
    }

    return(
        <>
            <Navbar />
            <div>
                <label>First Name:</label>
                <input name="firstName" value={firstName} onChange={handleChange}/>
            </div>    
            <div>
                <label>Last Name:</label>
                <input name="lastName" value={lastName} onChange={handleChange}/>
                </div>    
            <div>
                <label>User Name:</label>
                <input name="userName" value={userName} onChange={handleChange}/>
                </div>    
            <div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handleChange}/>
                </div>    
            <div></div>
                <label>Email:</label>
                <input name="email" value={email} onChange={handleChange}/>
            </div>
            <button onClick={handleClick}>Update</button>
        </>
    )
}