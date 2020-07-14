import { observable, action, reaction } from "mobx";
import { authApi } from "modules/auth/api/authApi";

class AuthStore {
  @observable
  loading: boolean = false;

  @observable
  token: string = window.localStorage.getItem("accessToken");

  @observable
  toggleMenu: boolean = false;

  constructor() {
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          this.setToken(token);
        } else {
          window.localStorage.removeItem("accessToken");
          this.token = null;
        }
      }
    );
  }

  @action
  setToken(token) {
    localStorage.setItem("accessToken", token);
    this.token = token;
  }

  login(data: { email: string; password: string }) {
    this.loading = true;
    return authApi
      .login(data)
      .then((response) => {
        this.setToken(response.accessToken);
        return response;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  register(data: { email: string; password: string; confirmPassword: string }) {
    if (data.password !== data.confirmPassword)
      return alert("Passwords not matching");

    this.loading = true;
    return authApi
      .register({
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        this.setToken(response.accessToken);
        return response;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  @action
  logout() {
    localStorage.removeItem("accessToken");
    this.token = null;
  }
}

export default new AuthStore();
