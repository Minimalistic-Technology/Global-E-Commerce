"use client";
import  { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("email")) setLoggedIn(true);
  }, []);
  return {loggedIn,setLoggedIn};
};
export default useLocalStorage;