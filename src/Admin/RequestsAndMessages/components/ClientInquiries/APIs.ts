
import {API} from '../../../../config';


export const getPropertyRequests = () => {
    return fetch (`${API}/listings/property/requests`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const getPropertyRequest = (id:number) => {
    return fetch (`${API}/listings/property/requests/${id}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const propertyStatus = (id:number) => {
   
    return fetch (`${API}/listings/property/request/status/${id}`, {
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