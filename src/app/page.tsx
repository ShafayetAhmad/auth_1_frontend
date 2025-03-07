import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full items-center text-center h-screen justify-center center text-2xl ">
      <h3 className="text-xl my-10">Home</h3>
      <div className="flex justify-center gap-10 w-full">
        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
        <Button>
          <Link href={"/register"}>Register</Link>
        </Button>
      </div>
    </div>
  );
}
