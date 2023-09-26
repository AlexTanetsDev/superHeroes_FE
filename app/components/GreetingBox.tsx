import Link from "next/link";

function GreetingBox() {
  return (
    <div className=" flex items-center justify-center gap-3 bg-slate-500 flex-col rounded-lg p-6 ">
      <h1 className=" text-2xl font-bold text-white">
        Welcome to the superheroes database
      </h1>
      <h2 className="text-slate-200 font-semibold">
        With this app you can view, create/delete and update superheroes
        profiles
      </h2>
      <Link
        href="/heroes"
        className=" w-32 p-1 rounded-full
         bg-orange-500 text-center mt-8
          text-slate-200 font-bold hover:shadow-xl
           hover:bg-orange-600"
      >
        Try in now
      </Link>
    </div>
  );
}

export default GreetingBox;
