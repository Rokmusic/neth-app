import {TextField} from "@consta/uikit/TextField";
import React, {useEffect} from "react";
import classes from "./InputName.module.css"
import {changeHeadline, changeStat} from "../../appSlice";
import {useDispatch, useSelector} from "react-redux";
import {persons} from "../../api";

const InputName = () => {
    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        persons.getPerson(6)

            .then(res => {
                const name = res.name

                const addTextHeadline = () => dispatch((changeHeadline(name)))
                addTextHeadline(name)
            })

    }, []);

    function funcChangeHeadline() {
        const inputName = document.getElementById('inputName')
        const inputText = inputName.value
        const addTextHeadline = () => dispatch((changeHeadline(inputText)))
        addTextHeadline(inputText)
    }

    function clearButton () {
        const value = ''
        const clearHeadline = () => dispatch((changeHeadline(value)))
        clearHeadline(value)
    }

    return (
        <div className={classes.container}>
            <TextField
                label="Наименование"
                className={classes.textField}
                size="s"
                id="inputName"
                type="text"
                value={app.headline}
                onChange={funcChangeHeadline}
            />
            <span
                className="clearButton clearButton__InputName"
                onClick={clearButton}
            />
        </div>
    )
}

export default InputName