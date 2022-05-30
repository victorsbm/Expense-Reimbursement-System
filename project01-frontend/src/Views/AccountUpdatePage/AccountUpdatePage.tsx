import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { AccountUpdate } from "../../Components/AccountUpdate/AccountUpdate";
import { AppDispatch, RootState } from "../../store";

import "./AccountUpdatePage.css";
import { updateCheck } from "../../Slices/userSlice";

export const AccountUpdatePage: React.FC = () =>{

    const userState = useSelector((state:RootState) => state.user.user);
    const idUpdated = useSelector((state:RootState) => state.user.isUpdated);
    const navigator = useNavigate();
    const dispatch:AppDispatch = useDispatch();
    
    useEffect(() => {
               
        if(idUpdated){
            navigator(`/employee/${userState?.username}`);
            dispatch(updateCheck());
        }       
    },[userState]);

    
    return(
        <>
            <Navbar />
            <AccountUpdate />
        </>
    )
}