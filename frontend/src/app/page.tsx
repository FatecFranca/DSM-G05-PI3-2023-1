"use client";

import { useContext } from "react";
import SignIn from "../app/SignIn/page";
import { AuthContext } from "./contexts/ContextAuth";
import Home from "./Home/page";

export default function Default() {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Home /> : <SignIn />;
}
