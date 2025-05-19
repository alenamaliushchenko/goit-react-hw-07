import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsData from '../components/contacts.json';

const initialState = {
  items: contactsData,
};


const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: {
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                        avatar: "https://cdn-icons-png.flaticon.com/128/151/151782.png",
                        phone: "https://cdn-icons-png.flaticon.com/128/151/151768.png" 
                    },
                };
            },
            reducer(state, action) {
                state.items.push(action.payload);
            },
        },    
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});


export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;