import { Suspense } from "react";
import HomeClient from "./HomeClient"; // separate client component

export default function HomePageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeClient />
    </Suspense>
  );
}
