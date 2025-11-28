import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      Username:{session?.user?.name}{" "}
      <img src={session?.user?.image} />
    </div>
  );
}
