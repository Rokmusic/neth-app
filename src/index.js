import React from 'react';
import {Provider} from "react-redux";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header";
import {createStore} from "redux";
import reducer from "./reducer";
import Body from "./components/Body";
import {presetGpnDefault} from "@consta/uikit/Theme";
import {Theme} from "@consta/uikit/Theme";
import reducerTable from "./reducerTable";
import './style.css';




const store = createStore(reducer);
const storeTable = createStore(reducerTable);

const container = document.getElementById('root');
const root = createRoot(container);



root.render(
    <div>
        <Theme preset={presetGpnDefault}>
            <Provider store={store}>

                    <Header/>
                <Provider store={storeTable}>
                    <Body/>
                </Provider>

            </Provider>
        </Theme>
    </div>
)