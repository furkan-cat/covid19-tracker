/**
 * Change country color on hover
 * @param {EventTarget} e React mouseover event
 * @returns {void} void
 */

export function changeCountryColor(e) {
  e.target.setStyle({
    fillColor: "#a2a8d3",
    color: "#393e46",
  });
}

/**
 * number
 * @param {EventTarget} e React mouseover event
 * @returns {void} returns void
 */

export function resetStyles(e, countryColors) {
  e.target.setStyle(countryColors);
}
