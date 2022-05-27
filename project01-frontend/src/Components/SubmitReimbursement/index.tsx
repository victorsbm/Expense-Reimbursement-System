import React, { useEffect, useState } from "react";
import { IReimbursement } from "../../Interfaces/IReimbursement";
import {Link} from 'react-router-dom';

import "./SubmitReimbursement.css"

interface IOnSubmit {
    onSubmitProp : (data:any) => void;
}

export const SubmitReimbursement: React.FC<IOnSubmit> = ({onSubmitProp}) =>{
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState();
    const [reimburseType, setReimburseType] = useState();
    
    const handleOnChange = (e:any) => {
        if(e.target.name === "amount"){
            setAmount(parseFloat(e.target.value));
        } else if(e.target.name === "description"){
            setDescription(e.target.value);
        } else{
            setReimburseType(e.target.value);
        }
    }

    const handleOnSubmit = (e:any) => {
        e.preventDefault();
        onSubmitProp({amount, description, reimburseType})
    }
    return(
        <div className="container">
            <div className="link-div">
                <button className="reimburse-btn"><Link to={"/employee/reimbursement/pending"} className="link">Pending Reimbursement</Link></button>
                <button className="reimburse-btn"><Link to={"/employee/reimbursement/approved"} className="link">Resolved Reimbursement</Link></button>
            </div>
            <form className="form-submit" onSubmit={handleOnSubmit}>
                <h3 className="h3-reimbusement">Submit Reimbursement</h3>
                <h4 className="h4-reimburse-submit">Amount</h4>
                <input className="reimburse-input" type="text" id="amount" name="amount" onChange={handleOnChange}/><br></br>
                <h4 className="h4-reimburse-submit">Description</h4>
                <input className="reimburse-input" type="text" id="description" name="description" onChange={handleOnChange}/><br></br>
                <h4 className="h4-reimburse-submit">Type</h4>
                <input className="reimburse-input" type="text" id="type" name="type" onChange={handleOnChange}/><br></br>
                <input className="submit-input" type="submit" value="Submit" />
            </form>
        </div>
    )
}