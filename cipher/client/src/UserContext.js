import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  const helper = async () => {
    console.log("test");
    const response = await axios.get("http://localhost:4000/getUser", {
      withCredentials: true,
    });
    console.log(response);
    if (response.status === 200) {
      setUser(response.data);
      setReady(true);
      return;
    }
    console.log(response);
  };
  useEffect(() => {
    // if (!user) {
    helper();
    // }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
