export class FormsScreen {

    get inputField() {
        return $('~text-input')
    }

    get typedField() {
        return $('~input-text-result')
    }

    get switchField() {
        return $('~switch')
    }

    get dropdownField() {
        return $('//android.widget.EditText[@resource-id="text_input"]')
    }

    get selectItem() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]')
    }

    get buttons() {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup')
    }

    get buttonAlert() {
        return $('~android:id/button1')
    }

    async typeSomething(words: string) {
    await this.inputField.setValue(words)
    await browser.pause(3000)
  }

    async typeResult() {
    await browser.waitUntil(
    async () =>
    (await $('~input-text-result').getText()) === 'Hello World!',
    {
    timeout: 5000,
    timeoutMsg: 'El texto exacto no apareció',
     }
    )}

    async switchButton() {
        await this.switchField.click();
        (await $('~switch-text').getText()) === 'Click to turn the switch OFF'
        await browser.pause(3000)
    }

    async selectDropdown() {
        await this.dropdownField.click();
        await browser.pause(3000)
        await this.selectItem.click();
        (await this.dropdownField.getText()) === 'This app is awesome'
        await browser.pause(3000)
    }

    async clickButtons() {
        await this.buttons.click();
        await browser.pause(3000)
        await this.buttonAlert.click();
        await browser.pause(3000)
    }
}

export default new FormsScreen()