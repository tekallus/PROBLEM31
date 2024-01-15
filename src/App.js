import { createContext, useContext } from "react";

const SaleContext = createContext(null);

export default function App() {
  return <Hero />;
}

function Hero() {
  const value = useContext(SaleContext);

  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Her şey 40% indirimli olsun
        </h1>
        <p className="mt-4 text-xl text-white">
          Yazin kucuk parti sürümümüzden seçenekler hala varken, en son
          haberlere göz atın
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Yeni Gelenleri Satın Alın
        </a>
      </div>
    </div>
  );
}
