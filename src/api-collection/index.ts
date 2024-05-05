import {
  registerAPI,
  signIn,
  validateToken,
  signOut,
  addMyHotel,
  fetchMyHotels,
  fetchMyHotelById,
  updateMyHotelById,
} from "./api-client";

export const apiClient = {
  register: registerAPI,
  validateToken: validateToken,
  signIn: signIn,
  signOut: signOut,
  addMyHotel: addMyHotel,
  fetchMyHotels: fetchMyHotels,
  fetchMyHotelById: fetchMyHotelById,
  updateMyHotelById: updateMyHotelById,
};
