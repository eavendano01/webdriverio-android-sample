
import type { Testrunner } from '@wdio/types/build/Options'

export const config: Testrunner = {
  runner: 'local',
  framework: 'mocha',
  specs: [],
  capabilities: [],
  maxInstances: 1,
  logLevel: 'info',
  reporters: ['spec'],
  services: ['appium'],
  mochaOpts: {
    timeout: 60000
  }
}
