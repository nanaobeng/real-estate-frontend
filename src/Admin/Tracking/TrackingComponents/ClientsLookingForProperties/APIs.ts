import {API} from '../../../../config';


export const addClientSearch = (values:any) => {
    
    return fetch (`${API}/admin/tracking/add/clients/searching`, {
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


export const getAllClientSearchItems = () => {
    return fetch (`${API}/admin/tracking/get/clients/searching/`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const deleteInquiryItem = (id:number) => {
    return fetch(`${API}/admin/tracking/delete/clients/searching/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updateInquiryItem = ( id:number,values:any) => {
    return fetch(`${API}/admin/tracking/update/clients/searching/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json'
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