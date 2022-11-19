import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "http://636d4025ab4814f2b27d253f.mockapi.io/api/contacts",
   });

export const getContacts = async() => {
    const {data} = await instanceContacts.get("/");
    return data;
};

export const addContacts = async(name, number) => {
    const newContact = { name, phone: number };
    const {data} = await instanceContacts.post("/", newContact);
    return data;
};


export const removeContacts = async(id) => {
    const {data} = await instanceContacts.delete(`/${id}`);
    return data;
};
