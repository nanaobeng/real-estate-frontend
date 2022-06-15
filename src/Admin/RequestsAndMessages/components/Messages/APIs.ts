
import {API} from '../../../../config';



export const getMessages = () => {
    return fetch(`${API}/admin/messages/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const getMessage = (id:number) => {
    return fetch(`${API}/admin/message/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const MessageStatus = (id:number) => {
   
    return fetch (`${API}/admin/message/status/${id}`, {
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