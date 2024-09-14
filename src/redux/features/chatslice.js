// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allGroups: [],
  filteredGroups: [{
    name: "Friends Group",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Family Group",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Work Team",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Gaming Squad",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Travel Buddies",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Study Group",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Book Club",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Music Lovers",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Sports Fans",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Art Enthusiasts",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },],
  selectedGroup: null,
  messages: []
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setAllGroups(state, action) {
      state.allGroups.push(action.payload)
    },
    setSelectedGroup(state, action) {
      state.selectedGroup = action.payload;  // Set the current active group
    },
    addMessage(state, action) {
      state.messages.push(action.payload);  // Add a new message to the chat
    },
  },
});

export const { setAllGroups, setSelectedGroup,addMessage } = chatSlice.actions;

export default chatSlice.reducer;
