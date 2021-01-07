import {GIPHY_URL_API, GIPHY_KEY} from '../constants/giphy'

export const getGiphy = search =>
  fetch(`${GIPHY_URL_API}?api_key=${GIPHY_KEY}&tag=${search}`)
    .then(response => response.json())
    .then(data => data)


