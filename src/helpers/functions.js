import axios from "axios";
import { EVENT_API } from "./consts";

export const addDataToLocalStorage = (name) => {
  localStorage.setItem("name", JSON.stringify(name));
};

export const logout = () => {
  localStorage.removeItem("name");
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("name");
  if (!user) return false;
  return true;
};

export const getTotalPages = async (url) => {
  const { data } = await axios.get(EVENT_API);
  const totalPages = Math.ceil(data.length / 9);
  return totalPages;
};

// export const updateToken = () => {
//   let updateFunc = setInterval(async () => {
//     const tokens = JSON.parse(localStorage.getItem("tokens"));
//     if (!tokens) return clearInterval(updateFunc);
//     const Authorization = `Bearer ${tokens.access}`;
//     const { data } = await axios.post(
//       `${ACCOUNT_API}/api/token/refresh/`,
//       { refresh: tokens.refresh },
//       { headers: { Authorization } }
//     );
//     localStorage.setItem(
//       "tokens",
//       JSON.stringify({ refresh: tokens.refresh, access: data.access })
//     );
//   }, 1000 * 60 * 9);
// };
