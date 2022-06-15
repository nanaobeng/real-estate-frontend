import {API} from '../../../config';


export const getListings = () => {
    return fetch (`${API}/listings`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};



export const getLocations = () => {
    return fetch (`${API}/locations`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const getLocationByCity = (city:any) => {
    const data = {
        city
    }
    return fetch (`${API}/location`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getFilteredResults = (limit:any,filters:any) => {
    const data = {
        limit,filters
    }
    return fetch (`${API}/listings/by/search`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getFilteredCount = (filters:any) => {
    console.log('...processing')
    console.log(filters)
    const data = {
    
        filters
    }
  
    return fetch (`${API}/listings/by/filtered/search`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
     
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getImages = (id:number) => {
    return fetch (`${API}/listing/images/${id}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getListing = (id:number) => {
    return fetch (`${API}/listing/${id}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getLocation = (id:number) => {
    return fetch (`${API}/location/${id}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const propertyRequest = (values:any) => {
    const data = {
        values
    }
    return fetch (`${API}/listings/property/request`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const checkAvailabililty = (values:any) => {
    const data = {
        values
    }
    return fetch (`${API}/listing/availability`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const clientRequest = (values:any) => {
    
    return fetch (`${API}/listing/client/request`, {
        method: "POST",
        headers: {
            Accept: 'application/json'
           
        },
        body:values
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const listingIncrement = (id:number,title:string,location:any) => {
    const data = {
        title,location
    }
    return fetch (`${API}/listings/increment/${id}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};
