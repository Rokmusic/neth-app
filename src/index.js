import React from 'react';
import {Provider} from "react-redux";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header";
import store from "./store";
import Body from "./components/Body";
import {presetGpnDefault} from "@consta/uikit/Theme";
import {Theme} from "@consta/uikit/Theme";
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <div>
        <Theme preset={presetGpnDefault}>
            <Provider store={store}>
                    <Header/>
                    <Body/>
            </Provider>
        </Theme>
    </div>
)