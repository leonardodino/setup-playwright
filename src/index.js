const { setFailed } = require('@actions/core')
const { platform } = require('os')
const { readFileSync } = require('fs')

function getIsDebian() {
  try {
    if (platform() !== 'linux') return false
    const osReleaseText = readFileSync('/etc/os-release', 'utf8')
    if (osReleaseText.includes('NAME="Debian GNU/Linux"')) return true
    if (osReleaseText.includes('VERSION_CODENAME=buster')) return true
  } catch (e) {}
  return false
}

try {
  getIsDebian()
    ? require('./playwright-nektos-act')
    : require('playwright-github-action')
} catch (error) {
  setFailed(error.message)
}
