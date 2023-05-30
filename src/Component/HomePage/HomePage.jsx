import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: { show: false },
            isSignIn: { show: true },
        };
    }

    SignIn() {
        return (
            <div className="login">
                <div className="login__container">
                    <h1>Đăng Nhập</h1>
                    <form>
                        <h5>Email</h5>
                        <input type="text" className="input-login-username" />
                        <h5>Password</h5>
                        <input type="password" className="input-login-password" />
                        <button type="submit" className="login__signInButton">Đăng Nhập</button>
                    </form>
                    <span className="login__registerButton" onClick={this.showSignUp()}
                    >Tạo tài khoản mới</span>
                </div>
            </div>
        )
    }

    signUp() {
        return (
            <div className="signup">
                <div className="signup__container">
                    <h1>Đăng Ký</h1>
                    <form action="">
                        <h5>Email</h5>
                        <input type="text" className="input-signup-username" />
                        <h5>Password</h5>
                        <input type="password" className="input-signup-password" />
                        <button type="submit" className="signup__signInButton">Đăng Ký</button>
                    </form>
                    <a className="login__registerButton" onClick={this.showSignIn()}
                    >Tạo tài khoản mới</a>
                </div>
            </div>
        )
    }
    showSignUp() {
        // this.setState({
        //     isSignUp: { show: true },
        //     isSignIn: { show: false }
        // })
        console.log('sssss')
    }
    showSignIn() {
        // this.setState({
        //     isSignUp: { show: false },
        //     isSignIn: { show: true }
        // })
        console.log('qqqqqqq')
    }
    render() {
        return (
            <div>
                {/* {this.state.isSignIn.show && this.SignIn()}
                {this.state.isSignUp.show && this.signUp()} */}
                {this.SignIn()}
                {this.signUp()}
            </div>
        );
    }
}

export default HomePage;