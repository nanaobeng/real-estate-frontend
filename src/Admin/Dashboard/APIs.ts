import {API} from '../../config';


export const countListings = () => {
    return fetch (`${API}/listings/count`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const countLocations = () => {
    return fetch (`${API}/locations/count`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const countNewMessages = () => {
    return fetch (`${API}/messages/new/count`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const countNewListingRequests = () => {
    return fetch (`${API}/client/listings/new/count`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const countNewClientRequests = () => {
    return fetch (`${API}/listing/requests/new/count`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const ListingViewsChart = () => {
    return fetch (`${API}/test`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const dashboardCounts = () => {
    return fetch (`${API}/admin/dashboard/counts`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};



export const trackingCounts = () => {
    return fetch (`${API}/admin/tracking/counts`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};




