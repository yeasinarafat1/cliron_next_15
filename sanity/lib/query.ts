import { defineQuery } from "next-sanity";

export const AUTHOR_BY_GOOGLE_ID_QUERY = defineQuery(`
*[_type == "user" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
}
`);
export const AUTHOR_BY_GOOGLE_EMAIL_QUERY = defineQuery(`
*[_type == "user" && email == $email][0]{
    _id,
    id,
    name,
    email,
    image,
    country,
    phonenumber,
    secendery_email,
   
}
`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
*[_type == "user" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);
export const GET_ADDRESS_BY_AUTHOR_AND_TYPE = defineQuery(`
*[_type == "address" && author._ref == $id && type == $type][0]{
    _id,
    Address,
    type,
    country,
    Company_Name,
    states,
    city,
    zipcode,
    email,
    phonenumber,
    name
    
}
`);
export const GET_ALL_CARD_BY_AUTHOR_ID = defineQuery(`
*[_type == "card" && author._ref == $id]{
    _id,
    name,
    number,
    expiry,
    cvc,
}
`);
