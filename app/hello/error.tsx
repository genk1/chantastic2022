"use client";

export default function HelloError({ error }: { error: Error }) {
  return (
    <>
      <p>something went wrong</p>
      {/* <p>{JSON.stringify(error, null, 2)}</p> */}
    </>
  );
}
