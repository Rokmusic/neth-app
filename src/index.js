import React from 'react';
import {Provider} from "react-redux";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header/Header";
import store from "./store";
import Body from "./components/Body/Body";
import {presetGpnDefault} from "@consta/uikit/Theme";
import {Theme} from "@consta/uikit/Theme";
import './components/style.css';
import "./components/normalize.css"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
        <Theme preset={presetGpnDefault}>
            <Provider store={store}>
                    <Header/>
                    <Body/>
            </Provider>

        </Theme>
)