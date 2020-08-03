const { setFailed } = require('@actions/core')
const { exec } = require('@actions/exec')

// debian buster dependencies
const deps = {
  chromium: [
    'libasound2',
    'libatk-bridge2.0-0',
    'libatk1.0-0',
    'libatspi2.0-0',
    'libcairo2',
    'libcups2',
    'libdbus-1-3',
    'libdrm2',
    'libgbm-dev',
    'libgbm1',
    'libgdk-pixbuf2.0-0',
    'libglib2.0-0',
    'libgtk-3-0',
    'libnspr4',
    'libnss3',
    'libpango-1.0-0',
    'libpangocairo-1.0-0',
    'libx11-6',
    'libx11-xcb1',
    'libxcb-dri3-0',
    'libxcb1',
    'libxcomposite1',
    'libxdamage1',
    'libxext6',
    'libxfixes3',
    'libxi6',
    'libxrandr2',
    'libxss1',
    'libxtst6',
    'procps',
  ],
}

async function run() {
  try {
    await exec('apt-get', ['update'])
    await exec('apt-get', [
      'install',
      '--no-install-recommends',
      '--yes',
      ...deps.chromium,
    ])
  } catch (error) {
    setFailed(error.message)
  }
}

run()
