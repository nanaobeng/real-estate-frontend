
import {API} from '../../../../config';



export const getClientPropertyRequests = () => {
    return fetch(`${API}/listings/request`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const listingStatus = (id:number) => {
   
    return fetch (`${API}/listings/status/${id}`, {
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