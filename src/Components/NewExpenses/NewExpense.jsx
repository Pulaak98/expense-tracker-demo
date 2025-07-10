import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const onSubmitData = (data) => {

        props.onAddData(data)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitForm={onSubmitData} />
        </div>
    );
};

export default NewExpense;
