import {API} from '../../../../config';


export const addDeveloperList = (values:any) => {
    
    return fetch (`${API}/admin/tracking/add/developers/list`, {
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


export const getAllListItems = () => {
    return fetch (`${API}/admin/tracking/get/developers/list/`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const deleteDevelopersListItem = (id:number) => {
    return fetch(`${API}/admin/tracking/delete/developers/list/${id}`, {
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


export const updateDevelopersListItem = ( id:number,values:any) => {
    return fetch(`${API}/admin/tracking/update/developers/list/${id}`, {
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