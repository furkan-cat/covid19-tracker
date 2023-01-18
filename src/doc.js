/**
 * Change country color on hover
 * @param {EventTarget} e React mouseover event
 * @returns {void} returns void
 */
function changeCountryColor(e) {
  e.target.setStyle({
    fillColor: "#a2a8d3",
    color: "#393e46",
  });
}

/**
 * Reset county styles on mouseout
 * @param {EventTarget} e React mouseout event
 * @returns {void} returns void
 */
function resetStyles(e, countryColors) {
  e.target.setStyle(countryColors);
}

/**
 * Redirect to Detail Page when click any of country on the map & sets clicked country name to the redux store to trogger API call for the covid19 data details.
 * @param {string} country Country names
 * @returns {void} returns void
 */
function doubleClick(country) {
  setTimeout(() => {
    redirect(routes.detail);
  }, 1500);
  dispatch(setCountry(country));
}

/**
 * Function that takes map information like feature, layer and takes responsibility user integration with user
 * @param {object} feature Map feature data
 * @param {object} layer Map layer data
 * @returns {void} returns void
 */
function onEachCountry(feature, layer) {
  const country = feature.properties.ADMIN;
  layer.bindPopup(country);

  layer.on({
    mouseover: (e) => changeCountryColor(e),
    mouseout: (e) => resetStyles(e, countryColors),
    dblclick: () => doubleClick(country),
  });
}

/**
 * When dispatched clicked country name, via props action this function runs to get API "country total" response.
 * @param {string} action Country names
 * @returns {array} returns void
 */
function* getCountryTotal(action) {
  try {
    const data = yield call(() =>
      fetch(`${APP.url}/v1/total?country=${action.payload}`, {
        method: "GET",
        headers: {
          ...APP.headers,
        },
      })
    );
    const countryTotal = yield data.json();
    yield put(setTotal(countryTotal));
  } catch (err) {
    console.log(err);
  }
}

/**
 * When dispatched clicked country name, via props action this function runs to get API "country stats" response.
 * @param {string} action Country names
 * @returns {array} returns void
 */
function* getCountryStats(action) {
  try {
    const data = yield call(() =>
      fetch(`${APP.url}/v1/stats?country=${action.payload}`, {
        method: "GET",
        headers: {
          ...APP.headers,
        },
      })
    );
    const countryStats = yield data.json();
    yield put(setStats(countryStats));
  } catch (err) {
    console.log(err);
  }
}

/**
 * Saga root function that aggregates multiple Sagas in order to sagaMiddleware to run
 * @returns {void} returns void
 */
function* rootSaga() {
  yield takeEvery("country/setCountry", getCountryTotal);
  yield takeEvery("country/setCountry", getCountryStats);
}
