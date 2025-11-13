"use client"; // must be client-side
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    // get id from localStorage
    const id = localStorage.getItem("selectedAthlete");

    if (id) {
      // redirect with id in URL
      window.location.href = `/home?id=${encodeURIComponent(id)}`;
    } else {
      window.location.href = "/home";
    }
  }, []);

  return <p>Redirecting...</p>;
}
