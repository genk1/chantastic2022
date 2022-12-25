"use client";

import { useEffect } from "react";

export default function HelloError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <p>something went wrong</p>
      <p>{JSON.stringify(error, null, 2)}</p>
      <button onClick={() => reset()}>Reset Error Boundary</button>
    </>
  );
}
