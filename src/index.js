import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import './index.css'
import { Provider } from './Context/context';


ReactDOM.render(
    <SpeechProvider appId="e9de9603-d772-40ad-be23-cb138aefde3d" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);