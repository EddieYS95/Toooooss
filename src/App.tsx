import * as React from "react";
import "./App.css";
import { Container, Typography } from "@material-ui/core";

class App extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Container maxWidth="sm">
                    <div style={{backgroundColor: 'skyblue'}}>
                        <Typography variant="h2" component="div" style={{ marginTop: "24px", textAlign: "center" }}>
                            toss
                        </Typography>
                        <Typography variant="h3" component="div" style={{ textAlign: "center" }}>
                            Login
                        </Typography>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
