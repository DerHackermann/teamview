'use strict'
const { showStation } = require('./features/teamview')
const { init: initMain } = require('./tv.main')

function addMenuButton () {
  // add button to menu
  const listEntry = document.createElement('li')
  const listLink = document.createElement('a')
  listLink.href = `${window.location.pathname}?page=galaxy#teamview-station`
  listLink.text = 'Teamview'
  listEntry.appendChild(listLink)
  const ref = document.getElementById('menu').children[13]
  ref.insertAdjacentElement('afterend', listEntry)
}

function init () {
  addMenuButton()
  if (window.location.hash === '#teamview-station') {
    showStation()
  }
}

init()
initMain()
