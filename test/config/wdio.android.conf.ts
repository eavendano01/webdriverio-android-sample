
import { config as baseConfig } from '../../wdio.conf.base'

export const config = {
  ...baseConfig,
  specs: [
    //'./test/specs/android/**/*.ts',  --> Original line to run all Android tests
    // Specific tests to run for Android
    './test/specs/android/home.android.spec.ts',
    './test/specs/android/login.android.spec.ts',
    './test/specs/android/forms.android.spec.ts'
  ],
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'my-phone-web',
      'appium:platformVersion': '15.0',
      'appium:app': require('path').resolve('./android-sample-app.apk'),
      'appium:automationName': 'UiAutomator2'
    }
  ]
}
