import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [inputValue, setInputValue] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const inputHandler = (identifier, value) => {
        if (identifier == "title") {
            setInputValue((prevState) => {
                return { ...prevState, enteredTitle: value };
            });
        } else if (identifier == "amount") {
            setInputValue((prevState) => {
                return { ...prevState, enteredAmount: value };
            });
        } else {
            setInputValue((prevState) => {
                return { ...prevState, enteredDate: value };
            });
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: inputValue.enteredTitle,
            amount: inputValue.enteredAmount,
            date: new Date(inputValue.enteredDate),
        };
        props.onSubmitForm(expenseData);
        setInputValue({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={inputValue.enteredTitle}
                        onChange={(event) => {
                            inputHandler("title", event.target.value);
                        }}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={inputValue.enteredAmount}
                        onChange={(event) => {
                            inputHandler("amount", event.target.value);
                        }}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2022-01-01"
                        max="2026-12-31"
                        value={inputValue.enteredDate}
                        onChange={(event) => {
                            inputHandler("date", event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
