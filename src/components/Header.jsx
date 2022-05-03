import React from "react";
import Search from "../components/Search";
import {connect} from "react-redux";
import * as actions from "../actions"
import {bindActionCreators} from "redux";

const Header = ({headline, changeHeadline}) => {

    return (

        <div className="header-container">
            <div>
                <h2 id="h2">{headline}</h2>
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
                       value={headline}
                       onInput={changeHeadline}
                />
                <input type="text"/>
                <input type="text"/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        headline: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    const {changeHeadline} = bindActionCreators(actions, dispatch);
    return {
        changeHeadline: (inputName, value) => {
            inputName = document.getElementById('inputName')
            value = inputName.value;
            changeHeadline(value);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)