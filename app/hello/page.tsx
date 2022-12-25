import { notFound } from "next/navigation";

async function fetchUser(id?: string) {
  // const res = await fetch("https://httpstat.us/404");
  // const res = await fetch("https://httpstat.us/500");
  const res = await fetch("http://localhost:3000/api/hello");
  if (!res.ok) {
    return undefined;
  }

  return await res.json();
}

export default async function HelloPage() {
  let user = await fetchUser();
  if (!user) {
    notFound();
  }
  return <p>{user.name}</p>;
}
