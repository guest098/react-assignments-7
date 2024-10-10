// src/appointmentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    appointments: [],
    selectedAppointment: null,
  },
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    updateAppointment: (state, action) => {
      const index = state.appointments.findIndex(app => app === state.selectedAppointment);
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    },
    deleteAppointment: (state, action) => {
      state.appointments = state.appointments.filter((_, index) => index !== action.payload);
    },
    setSelectedAppointment: (state, action) => {
      state.selectedAppointment = action.payload;
    },
    clearSelectedAppointment: (state) => {
      state.selectedAppointment = null;
    },
  },
});

export const {
  addAppointment,
  updateAppointment,
  deleteAppointment,
  setSelectedAppointment,
  clearSelectedAppointment,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
