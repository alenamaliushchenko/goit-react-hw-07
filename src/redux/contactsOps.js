import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://682dd0c24fae18894757b40a.mockapi.io/contacts";

// fetchContacts - отримати всі контакти (GET)
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// addContact - додати контакт (POST)
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, { rejectWithValue }) => {
    try {
    const newContact = { name, number };
    const response = await axios.post(BASE_URL, newContact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// deleteContact - видалити контакт по ID (DELETE)
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);  // ВАЖЛИВО: використання шаблонних рядків!
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
