// copy only body part of station.html inside here
module.exports.home = `
<div>
  <table>
    <tbody>
      <tr>
        <th colspan="3">
          Search known Planets <span id="loading" style="display:none;">(Loading ...)</span>
        </th>
      </tr>
      <tr>
        <td>
          <input type="checkbox" id="require_report" unchecked>
          <label for="require_report">Require report</label>
        </td>
        <td>
          <label for="report_maxage">Max age [hours]: </label>
          <input type="number" id="report_maxage" value="72" min="0" max="500" class="location-field">
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <label for="player_name">Player: </label>
          <input type="text" id="player_name" value="" class="name-field">
        </td>
        <td>
          <label for="alliance_name">Alliance: </label><input type="text" id="alliance_name" value=""
            class="name-field">
        </td>
        <td>
          <label for="rank_min">Rank: </label>
          <input type="number" id="rank_min" value="200" min="0" max="9999" class="location-field"> -
          <input type="number" id="rank_max" value="1400" min="0" max="9999" class="location-field">
        </td>
      </tr>
      <tr>
        <td>
          <label for="galaxy_min">Galaxy: </label><input type="number" id="galaxy_min" min="1" max="9" value=""
            class="location-field"> -
          <input type="number" id="galaxy_max" value="" min="1" max="9" class="location-field">
        </td>
        <td>
          <label for="system_min">System: </label><input type="number" id="system_min" value="" min="1" max="400"
            class="location-field"> -
          <input type="number" id="system_max" value="" min="1" max="400" class="location-field">
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <label for="inactive">Inactive: </label>
          <select id="inactive">
            <option value="-" selected>-</option>
            <option value="yes">Y</option>
            <option value="no">N</option>
          </select>
        </td>
        <td>
          <label for="vacation">Vacation: </label>
          <select id="vacation">
            <option value="-">-</option>
            <option value="yes">Y</option>
            <option value="no" selected>N</option>
          </select>
        </td>
        <td>
          <label for="banned">Banned: </label>
          <select id="banned">
            <option value="-" selected>-</option>
            <option value="yes">Y</option>
            <option value="no">N</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <button id="station-search">search</button>
        </td>
      </tr>
    </tbody>
  </table>
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
        <th style="white-space: nowrap">Player (Rank)</th>
        <th style="white-space: nowrap">Planet</th>
        <th style="white-space: nowrap">M</th>
        <th style="white-space: nowrap">Alliance</th>
        <th style="white-space: nowrap">Infos</th>
        <th style="white-space: nowrap">Action</th>
      </tr>
    </tbody>
  </table>
  <table id="fleet-status" class="">
    <tbody>
      <tr style="display: none;" id="fleetstatusrow">
        <th>Fleets</th>
      </tr>
    </tbody>
  </table>
</div>
`
