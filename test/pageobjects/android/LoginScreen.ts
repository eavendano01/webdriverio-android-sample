
export class LoginScreen {
  get usernameField() {
    return $('~input-email')
  }

  get passwordField() {
    return $('~input-password')
  }

  get loginButton() {
    return $('~button-LOGIN')
  }

  async login(email: string, password: string) {
    await this.usernameField.setValue(email)
    await this.passwordField.setValue(password)
    await this.loginButton.click()
  }
}

export default new LoginScreen()
