export interface IGeoItem {
  address: string;
  latitude: number;
  longitude: number;
  label: string;
  description: string;
  id: number;
}

export const initialState: { geoArr: IGeoItem[] | []; center: number[] } = {
  geoArr: [],

  center: [55.75, 37.57],
};
