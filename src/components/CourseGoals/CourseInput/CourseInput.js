import React, { useState } from "react";
// import styled from "styled-components";  --> "STYLED COMPONENTS"

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// ***** STYLED COMPONENTS *****
/*const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => (props.invalid ? "red" : "black")};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
        background-color: ${(props) =>
            props.invalid ? "#ffd7d7" : "transparent"};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`;
*/

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue("");
    };

    return (
        <form onSubmit={formSubmitHandler}>
            {
                /* <FormControl className={!isValid && "invalid"}> */
                // --> using className to dynamically change the style
            }
            {/* <FormControl invalid={!isValid}> </FormControl> --> "STYLED COMPONENT* tag */}
            <div
                className={`${styles["form-control"]} ${
                    !isValid && styles.invalid
                }`}
            >
                <label>Course Goal</label>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
