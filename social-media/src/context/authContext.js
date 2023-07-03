import { createContext, useEffect, useState, } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //ToDo
    setCurrentUser({
      id: 1,
      name: "Mehdi",
      profilePic:"https://images.pexels.com/photos/15846364/pexels-photo-15846364/free-photo-of-fashion-frau-model-dach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
