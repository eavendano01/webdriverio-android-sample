
import { config as baseConfig } from '../../wdio.conf.base'

export const config = {
  ...baseConfig,
  specs: ['./test/specs/android/**/*.ts'],
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'PROCESAR-WDIO',
      'appium:platformVersion': '14',
      'appium:app': require('path').resolve('./android-sample-app.apk'),
      'appium:automationName': 'UiAutomator2'
    }
  ]
}
