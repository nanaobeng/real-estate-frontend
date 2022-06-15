
import {API} from '../../../../config';



export const getClientRequests = () => {
    return fetch(`${API}/listings/client/requests`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const ClientRequestStatus = (id:number) => {
   
    return fetch (`${API}/listings/client/requests/status/${id}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        }
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getClientRequest = (id:any) => {
    return fetch (`${API}/admin/client/listing/${id}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const getClientImages = (id:number) => {
    return fetch(`${API}/listings/property/requests/images/${id}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};