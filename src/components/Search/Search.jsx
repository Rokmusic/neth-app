import React from "react";
import {Button} from "@consta/uikit/Button";


export default class Search extends React.Component {
    render() {
        return <div className="search">
            <input type="search"
                   className="search-input"
            />
            <Button className="search-btn" label={'Поиск'}></Button>
            </div>
        }
}








