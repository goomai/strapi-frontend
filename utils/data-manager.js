import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'deployed_URL' : process.env.NEXT_PUBLIC_STRAPI_LOCAL;

export const getData = async (url) => {
    const response = await axios({
        method: "GET",
        url: `${baseURL}/${url}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN}`
        },
    }).catch(e => { return e.response; });
    
    return response;
};

export const postData=async( url, data)=> {
    const JSONdata = JSON.stringify(data)
    const response = await axios({
        method: "POST",
        url:  `${baseURL}/${url}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN}`
        },
        data: JSONdata
    }).catch(e => {return e.response});
    return response
}