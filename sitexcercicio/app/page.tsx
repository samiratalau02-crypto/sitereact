import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <header className="text-center py-8 text-2xl font-bold">
        <h1 className="text-6xl font-extrabold">Painting</h1>
        <div className="justify-items-center">
          <img className="py-8" src="/img/header.svg" alt="Header Banner" />
          <img className="pt-20 pb-0 w-25" src="/img/icon2.svg" alt="Icon 2" />
        </div>
      </header>

      <div className="text-center">
        <h2 className="font-bold text-xl pb-5 pt-0">psum consequat</h2>
        <h3 className="text-gray-500 opacity-60">
          Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus
        </h3>
        <hr className="sm:m-15 my-6 border-t border-gray-200" />
      </div>

      <div className="justify-items-center pt-11">
        <img src="/img/icon3.svg" alt="Icon 3" />
      </div>

      <div className="text-center">
        <h2 className="font-bold text-xl pb-5 pt-8">Magna etiam dolor</h2>
        <h3 className="text-gray-500 opacity-60">
          Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus
        </h3>
        <hr className="sm:m-15 my-6 border-t border-gray-200" />
      </div>

      <div className="justify-items-center pt-11">
        <img src="/img/icon1.svg" alt="Icon 1" />
      </div>

      <div className="text-center justify-items-center">
        <h2 className="font-bold text-xl pb-5 pt-8">Tempus adipiscing</h2>
        <h3 className="text-gray-500 opacity-60 pb-20">
          Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus
        </h3>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <button className="bg-red-800 rounded-sm px-5 py-3 text-white font-bold w-full md:w-60">
            Get started
          </button>
          <button className="bg-black text-white rounded-sm px-5 py-3 font-bold w-full md:w-60">
            Learn more
          </button>
        </div>
      </div>

      <hr className="sm:m-15 my-6 border-t border-gray-200" />
    </main>
  );
}