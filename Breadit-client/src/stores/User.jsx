import { action, observable } from "mobx";
import { makeObservable } from "mobx";

export default class User {
    username = null;
    loggedIn = false;
    token = null;
    loginFailed = false;
    bread = 0;
    loafs = [];

    constructor() {
        makeObservable(this, {
            loginFailed: observable,
            username: observable,
            token: observable,
            loggedIn: observable,
            bread: observable,
            loafs: observable,
            setLoafs: action,
            setBread: action,
            logIn: action,
            logOut: action,
            setToken: action,
            setUsername: action,
            failedLogin: action,
            successLogin: action,
        });
    }

    setBread(bread) {
        this.bread = bread;
    }

    failedLogin() {
        this.loginFailed = true;
    }

    successLogin() {
        this.loginFailed = false;
    }

    logIn() {
        this.loggedIn = true;
    }

    logOut() {
        this.loggedIn = false;
    }

    setToken(token) {
        this.token = token;
    }

    setUsername(username) {
        this.username = username;
    }

    setLoafs(loafs) {
        this.loafs = loafs;
    }
}