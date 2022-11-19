import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../components/api/phonebook"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(_, thunkApi) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);


export const addContact = createAsyncThunk(
    "contacts/addContact",
    async({ name, phone }, { rejectWithValue }) => {
        try {
            const result = await api.addContacts(name, phone);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(id, thunkApi) => {
        try {
            const items = await api.removeContacts(id);
            return items;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

