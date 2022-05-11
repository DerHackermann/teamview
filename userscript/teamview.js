'use strict'
/* globals GM_xmlhttpRequest */

function addMenuButton () {
  // add button to menu
  const listEntry = document.createElement('li')
  const listLink = document.createElement('a')
  listLink.href = '#'
  listLink.onclick = showSettings
  listLink.text = 'Teamview'
  listEntry.appendChild(listLink)
  const ref = document.getElementById('menu').children[24]
  ref.insertAdjacentElement('afterend', listEntry)
}

function showSettings () {
  Array.from(document.querySelector('content').children).forEach(c => c.remove())
}

function getVisibleSystem () {
  function cleanName (name) {
    return name.split('(')[0].trim()
  }
  // all indexes 0-based
  // const ROW_SYSTEM = 0
  const ROWS_HEADER = 2
  const ROWS_COUNT = 15
  const COLUMN_PLAYER = 5
  const COLUMN_MOON = 3
  const COLUMN_DEBRIS = 4
  const COLUMN_PLANETNAME = 2
  const rowsWithPlanets = Array.from(document.querySelector('content table.table569').querySelectorAll('tr')).slice(ROWS_HEADER, ROWS_HEADER + ROWS_COUNT)
  const entries = []
  for (const [i, row] of rowsWithPlanets.entries()) {
    const cells = Array.from(row.querySelectorAll('td'))
    const planetName = cleanName(cells[COLUMN_PLANETNAME].innerText)
    const playerName = cleanName(cells[COLUMN_PLAYER].innerText)
    if (planetName && playerName) {
      entries.push({ planetName, playerName, position: i })
    }
  }
  return entries
}

function requestPlayerData (names) {
  const namesArray = names.join(',')
  console.log('sending request', namesArray)
  return new Promise((resolve, reject) => GM_xmlhttpRequest({
    method: 'GET',
    url: `http://localhost:3000/v1/players/${namesArray}`,
    headers: {
      token: 'TOKEN_pocket-wind-swung-barn'
    },
    onload: function (res) {
      if (res.status === 200) {
        let data = JSON.parse(res.responseText)
        if (names.length === 1) {
          // make sure result is always an array
          data = [data]
        }
        console.log(data)
        resolve(data)
      } else {
        console.warn('Error occured while trying to fetch data from teamview server', res.status, res.statusText)
        reject(new Error('Failed to fetch data from teamview server'))
      }
    }
  }))
}

function addColumn (addCount = 1, titles = []) {
  const rows = document.querySelector('content table.table569 tbody').children
  for (let rowIx = 0; rowIx < rows.length; rowIx++) {
    const tr = rows[rowIx]
    const COLUMN_STYLE_REF = 2
    let isSpan
    switch (rowIx) {
      case 0:
        tr.children[0].setAttribute('colspan', 8 + addCount)
        break
      case 1:
        for (let i = 0; i < addCount; i++) {
          const e = document.createElement('th')
          e.setAttribute('style', tr.children[COLUMN_STYLE_REF].getAttribute('style'))
          console.log(tr.children[COLUMN_STYLE_REF].style)
          let title = `Extra ${i + 1}`
          if (titles.length === addCount) {
            title = titles[i]
          }
          e.innerText = title
          tr.appendChild(e)
        }
        break
      case 17:
      case 18:
      case 19:
      case 20:
        isSpan = parseInt(tr.children[1].getAttribute('colspan'))
        tr.children[1].setAttribute('colspan', isSpan + addCount)
        break
      case 21:
        break
      default:
        for (let i = 0; i < addCount; i++) {
          const e = document.createElement('td')
          e.style = tr.children[COLUMN_STYLE_REF].style
          tr.appendChild(e)
        }
    }
  }
}

function modifyTable (playerData) {
  function cleanName (name) {
    return name.split('(')[0].trim()
  }
  // all indexes 0-based
  // const ROW_SYSTEM = 0
  const ROWS_HEADER = 2
  const ROWS_COUNT = 15
  const COLUMN_PLAYER = 5
  const COLUMN_STATS = 8
  const rowsWithPlanets = Array.from(document.querySelector('content table.table569').querySelectorAll('tr')).slice(ROWS_HEADER, ROWS_HEADER + ROWS_COUNT)
  for (const row of rowsWithPlanets) {
    const cells = row.querySelectorAll('td')
    const playerName = cleanName(cells[COLUMN_PLAYER].innerText)
    if (playerName) {
      const ingameRankStr = cells[COLUMN_PLAYER].querySelector('a')
        .getAttribute('data-tooltip-content')
        .split('pos. ')[1].split('<')[0]
      const ingameRank = parseInt(ingameRankStr)
      const data = playerData.find(e => e.name === playerName)
      const s = document.createElement('span')
      s.innerHTML = ` ${ingameRank}`
      s.style = 'font-size: 80%; color: yellow;'
      cells[COLUMN_PLAYER].querySelector('a').appendChild(s)

      const s2 = document.createElement('span')
      s.innerText = `Fleet: ${data.pointsFleet}\nDefense: ${data.pointsDefense}`
      cells[COLUMN_STATS].appendChild(s)
    }
  }
}

addMenuButton()

if (window.location.search.includes('page=galaxy')) {
  addColumn(2, ['Player Stats', 'Spio Info'])
  const data = getVisibleSystem()
  const players = data.map(e => e.playerName)
  const uniquePlayers = Array.from(new Set(players))
  requestPlayerData(uniquePlayers)
    .then(playerData => {
      return modifyTable(playerData)
    })
}
