import React, {useEffect, useRef, useState} from "react";
import Search from "../components/Search";
import {useDispatch, useSelector} from "react-redux";
import {changeHeadline, changeStat, changeZone} from "../appSlice";
import {persons} from "../api";
import {Button} from "@consta/uikit/Button";
import DatePickerClass from "./Date";

const Header = () => {

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

    // function changeStatus () {
    //     const inputName = document.getElementById('inputStatus')
    //     const inputText = inputName.value
    //     const addStatusInState = () => dispatch((changeStat(inputText)))
    //     addStatusInState(inputText)
    // }
    //
    // function changeZone () {
    //     const inputName = document.getElementById('inputZone')
    //     const inputText = inputName.value
    //     const addZoneInState = () => dispatch((changeZone(inputText)))
    //     addZoneInState(inputText)
    // }

    return (

        <div className="header-container">
            <div>
                <h2 id="h2">{app.headline}</h2>
                <div>
                    <Search/>
                    <Button className="files" label={'files'}></Button>
                    <Button className="info" label={'info'}></Button>
                    <Button className="burger" label={'burger'}></Button>

                </div>
            </div>
            <div>
                {<DatePickerClass/>}
            </div>
            <div>
                <label htmlFor="inputName">Наименование</label>
                <input id="inputName" type="text"
                       value={app.headline}
                       onChange={funcChangeHeadline}
                />
                <input id="inputStatus" type="text"
                       value={app.status}
                />
                <input id="inputZone" type="text"
                       value={app.zoneType}
                />
            </div>
        </div>
    );
}


export default Header