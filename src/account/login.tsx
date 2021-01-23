import * as React from "react";
import { Component } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import LoginViewModel from "./../viewModel/login.viewModel";

export default class Login extends Component {
    private loginViewModel = new LoginViewModel(this);

    render() {
        return (
            <>
                <Container maxWidth="sm" style={{ height: "900px", justifyContent: "center", backgroundColor: "SteelBlue" }}>
                    <Container>
                        <Typography variant="h2" component="div" style={{ color: "white", padding: "42px 0 24px 0", textAlign: "center" }}>
                            toss
                        </Typography>
                    </Container>

                    <TextField
                        onChange={(e) => {
                            this.loginViewModel.command("SET_EMAIL", e.target.value);
                        }}
                        value={this.loginViewModel.state.e_mail}
                        style={{ color: "white", margin: "10px 75px 0px 75px", width: "400px" }}
                        size="small"
                        variant="outlined"
                        label="e mail"
                    />
                    <TextField
                        onChange={(e) => {
                            this.loginViewModel.command("SET_PASSWORD", e.target.value);
                        }}
                        value={this.loginViewModel.state.password}
                        type="password"
                        style={{ color: "white", margin: "10px 75px 0px 75px", width: "400px" }}
                        size="small"
                        variant="outlined"
                        label="password"
                    />

                    <div style={{ width: "fit-content", margin: "24px auto" }}>
                        <Button
                            onClick={() => {
                                this.loginViewModel.command("LOGIN");
                            }}
                            variant="contained"
                            color="primary"
                        >
                            로그인
                        </Button>
                    </div>

                    <Typography component="div" style={{ color: "white", padding: "22px 0 24px 0", textAlign: "center" }}>
                            로그인 한 번으로, <br/>
                            계좌의 잔액과 거래내역을 조회하세요.
                    </Typography>
                </Container>
            </>
        );
    }
}
