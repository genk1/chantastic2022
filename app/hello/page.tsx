import { resolve } from "path";

export default async function HelloPage() {
  const req = await fetch("http://localhost:3000/api/hello");
  // const req = await fetch("https://httpstat.us/500");
  const data = await req.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <p>{data.name}</p>;
}
