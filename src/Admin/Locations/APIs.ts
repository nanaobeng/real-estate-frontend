import {API} from '../../config';

export const addLocation = (token:any, location:any) => {
    return fetch(`${API}/admin/location/add`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            jwt_token: `${token}`
        },
        body: location
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const getLocations = () => {
    return fetch(`${API}/locations/`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getLocation = (id:number) => {
    return fetch(`${API}/location/${id}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const deleteVaidation = (id:number) => {
    return fetch(`${API}/admin/delete/validate/${id}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};





export const deleteLocation = (id:number,token:any) => {
    return fetch(`${API}/admin/location/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            jwt_token: `${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateLocation = (token:any, id:number,values:any) => {
    return fetch(`${API}/admin/location/update/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            jwt_token: `${token}`
        },
        body: values
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

