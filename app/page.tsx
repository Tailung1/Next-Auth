
import { getServerSession } from "next-auth";
import Image from "next/image";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(options);
console.log(session,"recived session")
  return (
    <div>
      <h1>Username:{session?.user?.name} </h1>
      <h2>Email:{session?.user?.email} </h2>
      <h2>Age:{session?.user?.age} </h2>
   
      <Image
        src={session?.user?.image as string}
        width={200}
        height={200}
        alt='image'
      />
    </div>
  );
}
