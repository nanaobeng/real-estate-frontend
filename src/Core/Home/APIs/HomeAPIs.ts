import {API} from '../../../config';


export const getLocations = () => {
    return fetch (`${API}/locations`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const getRecentListings = () => {
    return fetch (`${API}/listings/home`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};