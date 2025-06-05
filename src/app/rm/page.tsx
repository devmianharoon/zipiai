"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";

export default function RemoveCookiePage() {
  useEffect(() => {
    // Remove the user_zipcode cookie
    Cookies.remove("user_zipcode");

    // Optional: Redirect to another page after removing the cookie
    window.location.href = "/";
  }, []);

  return null; // No UI needed since we're redirecting
}