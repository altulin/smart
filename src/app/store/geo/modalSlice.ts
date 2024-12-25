import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGeoItem, initialState } from "./initialState";

const geoArrSlice = createSlice({
  name: "geo",
  initialState,

  reducers: {
    addGeoItem(state, action: PayloadAction<IGeoItem>) {
      state.geoArr = [...state.geoArr, action.payload];
    },

    delGeoItem(state, action: PayloadAction<number>) {
      state.geoArr = state.geoArr.filter((item) => item.id !== action.payload);
    },

    editGeoItem(state, action: PayloadAction<IGeoItem>) {
      state.geoArr = state.geoArr.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
    },

    getCenter(state, action: PayloadAction<IGeoItem>) {
      state.center = [
        Number(action.payload.latitude),
        Number(action.payload.longitude),
      ];
    },
  },
});

export const { addGeoItem, delGeoItem, editGeoItem, getCenter } =
  geoArrSlice.actions;
export default geoArrSlice.reducer;
