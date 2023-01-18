import { call, put, takeEvery } from "redux-saga/effects";
import { APP } from "../../constants";
import { setStats, setTotal } from "../slices";

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

function* rootSaga() {
  yield takeEvery("country/setCountry", getCountryTotal);
  yield takeEvery("country/setCountry", getCountryStats);
}

export default rootSaga;
