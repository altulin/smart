/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../service/api";

export const geo = api.injectEndpoints({
  endpoints: (build) => ({
    getGeo: build.query({
      query: ({ geocode }) => ({
        url: `?apikey=${
          import.meta.env.VITE_APP_YA_KEY
        }&geocode=${geocode}&format=json`,
      }),

      transformResponse: (res: any) => {
        const geoObj =
          res.response.GeoObjectCollection.featureMember[0].GeoObject;

        return {
          address:
            geoObj.metaDataProperty.GeocoderMetaData.AddressDetails.Country
              .AddressLine,
          latitude: geoObj.Point.pos.split(" ")[1],
          longitude: geoObj.Point.pos.split(" ")[0],
          id: Math.floor(Math.random() * 100) + 1,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetGeoQuery } = geo;
