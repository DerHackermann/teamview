module.exports.home = `
<div>
    <div class="infos box container" id="search-planets">
      <div class="planeto title row" style="height: 50px;">
        <div class="col2">
          Search known planets <i class="fas fa-search"></i></i>
        </div>
        <div class="col2">
          <div style="display: inline; margin-right: 2em;">
            <input type="checkbox" id="require_report" unchecked>
            <label for="require_report">Require report</label>
          </div>
          <div style="display: inline;">
            <label for="report_maxage">Max age [hours]: </label>
            <input type="number" id="report_maxage" value="72" min="0" max="500" class="location-field">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col3">
          <label for="player_name">Playername: </label>
          <input type="text" name="byplayer_name" id="player_name" value="" class="name-field">
        </div>
        <div class="col3">
          <label for="rank_min">Rank: </label>
          <input type="number" id="rank_min" value="0" min="0" max="9999" class="location-field"> -
          <input type="number" id="rank_max" value="0" min="0" max="9999" class="location-field">
        </div>
        <div class="col3">
          <label for="alliance_name">Alliance name: </label><input type="text" id="alliance_name" value=""
            class="name-field">
        </div>
      </div>
      <div class="row">
        <div class="col1">
          <label for="galaxy_min">Galaxy: </label><input type="number" id="galaxy_min" min="1" max="9" value="1"
            class="location-field"> -
          <input type="number" id="galaxy_max" value="1" min="1" max="9" class="location-field">
          <label for="system_min">System: </label><input type="number" id="system_min" value="1" min="1" max="400"
            class="location-field"> -
          <input type="number" id="system_max" value="1" min="1" max="400" class="location-field">
        </div>
      </div>
      <div class="row">
        <div class="col1">
          <label for="inactive">Inactive: </label>
          <select id="inactive">
            <option value="-" selected>-</option>
            <option value="yes">Y</option>
            <option value="no">N</option>
          </select>

          <label for="vacation">Vacation: </label>
          <select id="vacation">
            <option value="-">-</option>
            <option value="yes">Y</option>
            <option value="no" selected>N</option>
          </select>

          <label for="banned">Banned: </label>
          <select id="banned">
            <option value="-" selected>-</option>
            <option value="yes">Y</option>
            <option value="no">N</option>
          </select>
        </div>
        <div class="row">
          <div class="col2">
          </div>
        </div <div class="row">
        <div class="col1">
          <button>search</button>
        </div>
      </div>
    </div>
    <div>
      <br>
    </div>
    <div>
      <table id="search-results" class="">
        <tbody>
          <tr>
            <th colspan="10">Search Results</th>
          </tr>
          <tr>
            <th style="white-space: nowrap">Pos.</th>
            <th style="white-space: nowrap">Planet</th>
            <th style="white-space: nowrap">Name</th>
            <th style="white-space: nowrap">Moon</th>
            <th style="white-space: nowrap">Debris</th>
            <th style="white-space: nowrap">Player</th>
            <th style="white-space: nowrap">Alliance</th>
          </tr>
          <tr>
            <td style="white-space: nowrap">Posadsf</td>
            <td style="white-space: nowrap">adsf</td>
            <td style="white-space: nowrap">adsf</td>
            <td style="white-space: nowrap">adsf</td>
            <td style="white-space: nowrap">adsf</td>
            <td style="white-space: nowrap">adsf</td>
            <td style="white-space: nowrap">adsf</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`
