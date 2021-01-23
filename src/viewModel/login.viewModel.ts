export default class LoginViewModel {

    constructor(private view: React.Component){
        view.state = this.state;
    }

    command (type, ...args){
        switch(type){
            case 'SET_EMAIL':
                this.state.e_mail = args[0];
                break;
            case 'SET_PASSWORD':
                this.state.password = args[0]
                break;
            case 'LOGIN':
                this.login()
        }
        this.notification();
    }

    state = {
        e_mail : '',
        password: ''
    }

    login (){
        alert(`id ${this.state.e_mail} password ${this.state.password}`)
    }

    notification(){
        this.view.setState(this.state);
    }

}