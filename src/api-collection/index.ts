import {
  registerAPI,
  signIn,
  validateToken,
  signOut,
  addMyHotel,
} from "./api-client";

export const apiClient = {
  register: registerAPI,
  validateToken: validateToken,
  signIn: signIn,
  signOut: signOut,
  addMyHotel: addMyHotel,
};
