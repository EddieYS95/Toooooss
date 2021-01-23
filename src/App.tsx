import * as React from "react";
import "./App.css";
import LoginPage from "./account/login"
class App extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <LoginPage/>
            </React.Fragment>
        );
    }
}

export default App;
