import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src="https://i.imgur.com/DSIEnEs.jpg" alt="" className="w-6/12" />
      <h2 className="font-bold text-lg">Šťastnýho komplex</h2>
      <p className="w-3/6">
        Šťastný komplex (často také pod názvem Šťastnýho syndrom“ nebo „Komplex
        zasraného předělávače“) je lidové označení pro specifický psychický
        komplex vycházející z předělávání vlastních projektů, v širším významu
        pak vycházející z jakékoli reworkování věcí. Pojmenován byl podle Jakuba
        Šťastného, který by měl držet hubu.{" "}
      </p>
    </div>
  );
}
