export interface IGeoItem {
  address: string;
  latitude: number;
  longitude: number;
  label: string;
  description: string;
  id: number;
}

export const initialState: { geoArr: IGeoItem[] | []; center: number[] } = {
  geoArr: [
    {
      address: "Москва, ул. Ленина, 1",
      latitude: 55.753215,
      longitude: 37.61797,
      label: "Москва метка",
      description: "Москва ljv",
      id: 1,
    },
    {
      address: "Москва, ул. Ленина, 1",
      latitude: 55.753215,
      longitude: 37.61797,
      label: "Москва метка",
      description: "Москва ljv",
      id: 2,
    },
    {
      address: "Москва, ул. Ленина, 1",
      latitude: 55.753215,
      longitude: 37.61797,
      label: "Москва метка",
      description: "Москва ljv",
      id: 3,
    },
    {
      address: "Москва, ул. Ленина, 1",
      latitude: 55.753215,
      longitude: 37.61797,
      label: "Москва метка",
      description: "Москва ljv",
      id: 4,
    },
    {
      address: "Москва, ул. Ленина, 1",
      latitude: 55.753215,
      longitude: 37.61797,
      label:
        "Москва метка Москва метка Москва метка Москва метка Москва метка Москва метка Москва метка",
      description: "Москва ljv",
      id: 5,
    },
    {
      address: "Москва, ул. Ленина, 1",
      latitude: 55.753215,
      longitude: 37.61797,
      label: "Москва метка",
      description: "Москва ljv",
      id: 6,
    },
    {
      address: "Москва, ул. Ленина, 1",
      latitude: 55.753215,
      longitude: 37.61797,
      label: "Москва метка",
      description: "Москва ljv",
      id: 7,
    },
  ],

  center: [55.75, 37.57],
};
