import React, {useEffect} from "react";
import Search from "../components/Search";
import {useDispatch, useSelector} from "react-redux";
import {changeHeadline} from "../appSlice";
import {persons} from "../api";

const Header = () => {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        persons.getPerson(123)

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

    return (

        <div className="header-container">
            <div>
                <h2 id="h2">{app.headline}</h2>
                <div>
                    <Search/>
                    <button className="files">files</button>
                    <button className="info">info</button>
                    <button className="burger">burger</button>
                </div>
            </div>
            <div>
                Date
            </div>
            <div>
                <label htmlFor="inputName">Наименование</label>
                <input id="inputName" type="text"
                       value={app.headline}
                       onChange={funcChangeHeadline}
                />
                <input type="text"/>
                <input type="text"/>
            </div>
        </div>
    );
}


export default Header