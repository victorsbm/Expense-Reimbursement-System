import React from "react";
import { IReimbursement } from "../../Interfaces/IReimbursement";


export const EmployeeReimbursement: React.FC<IReimbursement> = (reimbursement) => {
    return(
        <>
            <tr>
                <td>{reimbursement.reimburseId}</td>
                <td>{reimbursement.amount}</td>
                <td>{reimbursement.description}</td>
                <td>{reimbursement.reimburseAuthor}</td>
                <td>{reimbursement.reimburseResolver}</td>
                <td>{reimbursement.submittedDate}</td>
                <td>{reimbursement.resolvedDate}</td>
                <td>{reimbursement.reimburseStatus}</td>
                <td>{reimbursement.reimburseType}</td>
            </tr>
        </>
    )
}