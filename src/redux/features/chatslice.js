import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
   

const initialState = {
  allGroups: [],
  filteredGroups: [],
  selectedGroup: null,
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setAllGroups(state, action) {
      state.allGroups.push(action.payload)
    },
    setSelectedGroup(state, action) {
      state.selectedGroup = action.payload; 
    },
    addMessage(state, action) {
      state.messages.push(action.payload);  
    },
    setFilteredGroups(state, action) {
      state.filteredGroups = action.payload;  
    },
  },
});

export const { setAllGroups, setSelectedGroup,addMessage, setFilteredGroups } = chatSlice.actions;

export default chatSlice.reducer;
