import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return { ...state, isInitialized: true, isAuthenticated: action.payload.isAuthenticated, user: action.payload.user };
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload.user };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    case "REGISTER":
      return { ...state, isAuthenticated: true, user: action.payload.user };
    default:
      return state;
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  login: () => { },
  logout: () => { },
  register: () => { }
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/auth/profile");
        dispatch({ type: "INIT", payload: { isAuthenticated: true, user: data.user } });
      } catch (err) {
        console.error(err);
        dispatch({ type: "INIT", payload: { isAuthenticated: false, user: null } });
      }
    })();
  }, []);

  if (!state.isInitialized) return null;

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      const { user } = response.data;
      dispatch({ type: "LOGIN", payload: { user } });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const register = async (email, username, password) => {
    try {
      const response = await axios.post("/api/auth/register", { email, username, password });
      const { user } = response.data;
      dispatch({ type: "REGISTER", payload: { user } });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, method: "JWT", login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

