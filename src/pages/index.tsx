import { ReactElement } from "react";
import { GuestLayout } from "@/components/layouts/guest-layout";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/common/icon";

export default function HomePage() {
  return (
      <main className="max-w-[1280px] m-auto w-full">
        <div className="flex justify-between font-medium text-lg mb-7 mt-16 px-4 dmd:text-sm dmd:mb-5 dmd:mt-12 dsm:mt-5 dxs:flex-col">
          <ul className="flex space-x-7 uppercase tracking-wider dxs:space-x-4">
            <li className="text-red-400"><Link href="/">Все</Link></li>
            <li><Link href="/">Новинки</Link></li>
            <li><Link href="/">Букет дня</Link></li>
          </ul>

          <div>
            <button className="flex items-center text-red-400 font-medium uppercase dxs:normal-case"><Icon name="arrow" className="w-3 h-3 mr-1"></Icon><span>Цена</span></button>
          </div>
        </div>

        <div className="flex justify-between flex-wrap dsm:justify-start">
          <div className="basis-1/4 max-w-[296px] mb-11 px-4 dmd:mb-5 dsm:mb-2.5 dsm:basis-1/3 dxs:basis-1/2">
            <article>
              <Link href="/"><a href="/"><Image src="/images/test.jpg" width={296} height={400} alt="Цветы"></Image></a></Link>
              <div>
                <div className="flex justify-between mt-2.5 dsm:mt-0">
                  <span className="text-gray-400 text-2xl font-bold hover:text-black duration-200 dmd:text-lg dsm:text-sm"><Link href="/">БУКЕТ №298</Link></span>
                  <button className="flex items-center justify-center w-6 h-6 bg-gray-200 dsm:w-5 dsm:h-5"><Icon name="basket" className="w-4 h-4"></Icon></button>
                </div>
                <span className="text-base font-bold text-red-400 dmd:text-xs">1250 р.</span>
              </div>
           </article>
          </div>

          <div className="basis-1/4 max-w-[296px] mb-11 px-4 dmd:mb-5 dsm:mb-2.5 dsm:basis-1/3 dxs:basis-1/2">
            <article>
              <Link href="/"><a href="/"><Image src="/images/test.jpg" width={296} height={400} alt="Цветы"></Image></a></Link>
              <div>
                <div className="flex justify-between mt-2.5 dsm:mt-0">
                  <span className="text-gray-400 text-2xl font-bold hover:text-black duration-200 dmd:text-lg dsm:text-sm"><Link href="/">БУКЕТ №298</Link></span>
                  <button className="flex items-center justify-center w-6 h-6 bg-gray-200 dsm:w-5 dsm:h-5"><Icon name="basket" className="w-4 h-4"></Icon></button>
                </div>
                <span className="text-base font-bold text-red-400 dmd:text-xs">1250 р.</span>
              </div>
           </article>
          </div>

          <div className="basis-1/4 max-w-[296px] mb-11 px-4 dmd:mb-5 dsm:mb-2.5 dsm:basis-1/3 dxs:basis-1/2">
            <article>
              <Link href="/"><a href="/"><Image src="/images/test.jpg" width={296} height={400} alt="Цветы"></Image></a></Link>
              <div>
                <div className="flex justify-between mt-2.5 dsm:mt-0">
                  <span className="text-gray-400 text-2xl font-bold hover:text-black duration-200 dmd:text-lg dsm:text-sm"><Link href="/">БУКЕТ №298</Link></span>
                  <button className="flex items-center justify-center w-6 h-6 bg-gray-200 dsm:w-5 dsm:h-5"><Icon name="basket" className="w-4 h-4"></Icon></button>
                </div>
                <span className="text-base font-bold text-red-400 dmd:text-xs">1250 р.</span>
              </div>
           </article>
          </div>

          <div className="basis-1/4 max-w-[296px] mb-11 px-4 dmd:mb-5 dsm:mb-2.5 dsm:basis-1/3 dxs:basis-1/2">
            <article>
              <Link href="/"><a href="/"><Image src="/images/test.jpg" width={296} height={400} alt="Цветы"></Image></a></Link>
              <div>
                <div className="flex justify-between mt-2.5 dsm:mt-0">
                  <span className="text-gray-400 text-2xl font-bold hover:text-black duration-200 dmd:text-lg dsm:text-sm"><Link href="/">БУКЕТ №298</Link></span>
                  <button className="flex items-center justify-center w-6 h-6 bg-gray-200 dsm:w-5 dsm:h-5"><Icon name="basket" className="w-4 h-4"></Icon></button>
                </div>
                <span className="text-base font-bold text-red-400 dmd:text-xs">1250 р.</span>
              </div>
           </article>
          </div>

          <div className="basis-1/4 max-w-[296px] mb-11 px-4 dmd:mb-5 dsm:mb-2.5 dsm:basis-1/3 dxs:basis-1/2">
            <article>
              <Link href="/"><a href="/"><Image src="/images/test.jpg" width={296} height={400} alt="Цветы"></Image></a></Link>
              <div>
                <div className="flex justify-between mt-2.5 dsm:mt-0">
                  <span className="text-gray-400 text-2xl font-bold hover:text-black duration-200 dmd:text-lg dsm:text-sm"><Link href="/">БУКЕТ №298</Link></span>
                  <button className="flex items-center justify-center w-6 h-6 bg-gray-200 dsm:w-5 dsm:h-5"><Icon name="basket" className="w-4 h-4"></Icon></button>
                </div>
                <span className="text-base font-bold text-red-400 dmd:text-xs">1250 р.</span>
              </div>
           </article>
          </div>

          <div className="basis-1/4 max-w-[296px] mb-11 px-4 dmd:mb-5 dsm:mb-2.5 dsm:basis-1/3 dxs:basis-1/2">
            <article>
              <Link href="/"><a href="/"><Image src="/images/test.jpg" width={296} height={400} alt="Цветы"></Image></a></Link>
              <div>
                <div className="flex justify-between mt-2.5 dsm:mt-0">
                  <span className="text-gray-400 text-2xl font-bold hover:text-black duration-200 dmd:text-lg dsm:text-sm"><Link href="/">БУКЕТ №298</Link></span>
                  <button className="flex items-center justify-center w-6 h-6 bg-gray-200 dsm:w-5 dsm:h-5"><Icon name="basket" className="w-4 h-4"></Icon></button>
                </div>
                <span className="text-base font-bold text-red-400 dmd:text-xs">1250 р.</span>
              </div>
           </article>
          </div>

          <div className="basis-1/4 max-w-[296px] mb-11 px-4 dmd:mb-5 dsm:mb-2.5 dsm:basis-1/3 dxs:basis-1/2">
            <article>
              <Link href="/"><a href="/"><Image src="/images/test.jpg" width={296} height={400} alt="Цветы"></Image></a></Link>
              <div>
                <div className="flex justify-between mt-2.5 dsm:mt-0">
                  <span className="text-gray-400 text-2xl font-bold hover:text-black duration-200 dmd:text-lg dsm:text-sm"><Link href="/">БУКЕТ №298</Link></span>
                  <button className="flex items-center justify-center w-6 h-6 bg-gray-200 dsm:w-5 dsm:h-5"><Icon name="basket" className="w-4 h-4"></Icon></button>
                </div>
                <span className="text-base font-bold text-red-400 dmd:text-xs">1250 р.</span>
              </div>
           </article>
          </div>

          <div className="basis-1/4 max-w-[296px] mb-11 px-4 dmd:mb-5 dsm:mb-2.5 dsm:basis-1/3 dxs:basis-1/2">
            <article>
              <Link href="/"><a href="/"><Image src="/images/test.jpg" width={296} height={400} alt="Цветы"></Image></a></Link>
              <div>
                <div className="flex justify-between mt-2.5 dsm:mt-0">
                  <span className="text-gray-400 text-2xl font-bold hover:text-black duration-200 dmd:text-lg dsm:text-sm"><Link href="/">БУКЕТ №298</Link></span>
                  <button className="flex items-center justify-center w-6 h-6 bg-gray-200 dsm:w-5 dsm:h-5"><Icon name="basket" className="w-4 h-4"></Icon></button>
                </div>
                <span className="text-base font-bold text-red-400 dmd:text-xs">1250 р.</span>
              </div>
           </article>
          </div>

        </div>
      </main>
  );
}

HomePage.getLayout = (page: ReactElement): ReactElement => {
  return <GuestLayout>{page}</GuestLayout>;
};
