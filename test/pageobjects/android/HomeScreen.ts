export class HomeScreen {
  get homeScreen() {
    return $('~Home-screen');
  }

  get title() {
    return $('android=new UiSelector().text("WEBDRIVER")');
  }

  get subtitle() {
    return $('android=new UiSelector().text("Demo app for the appium-boilerplate")');
  }

  get supportText() {
    return $('android=new UiSelector().text("Support")');
  }

  get homeTab() {
    return $('~Home');
  }

  get webviewTab() {
    return $('~Webview');
  }

  get loginTab() {
    return $('~Login');
  }

  get formsTab() {
    return $('~Forms');
  }

  get swipeTab() {
    return $('~Swipe');
  }

  get dragTab() {
    return $('~Drag');
  }
}

export default new HomeScreen();
