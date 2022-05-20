import { FC } from "react";
import { Icon } from "@/components/common/icon";
import Link from "next/link";

export const DefaultFooter: FC = ({}) => {
  return (
    <div className="max-w-7xl m-auto px-4 dmd:text-xs">
      <div className="flex justify-between py-12 border-b border-gray-400 dsm:flex-col dsm:pt-5 dsm:pb-0 dsm:text-left">
        <div className="space-y-7 dsm:space-y-2.5">
          <span className="text-2xl font-bold tracking-wider text-red-400 dmd:text-lg dsm:hidden">Свежие поставки цветов каждый день!</span>
          <div className="flex dsm:justify-start"><span className="mr-2">Адрес:</span><address>Цветочная, 49Б</address></div>
          <div className="dsm:border-b dsm:border-gray-400 pb-4"><span className="mr-2">Телефон:</span><span>+7 (495) 889 76 54</span></div>
        </div>

        <div className="dsm:border-b dsm:border-gray-400">
          <nav>
            <ul className="space-y-7 dsm:space-y-2.5 mt-2 dsm:py-4 dsm:mt-0">
              <li><Link href="/">Политика конфиденциальности</Link></li>
              <li><Link href="/">Доставка</Link></li>
              <li><Link href="/">Контакты</Link></li>
            </ul>
          </nav>
        </div>

        <div className="dsm:flex dsm:justify-center mt-2 dsm:mt-0 dsm:items-center dsm:py-4 dsm:space-x-12">
          <Link href="/" passHref><a><Icon name="whatsapp" className="w-5 h-5 mb-9 cursor-pointer fill-slate-900 hover:fill-red-400 dsm:mb-0"></Icon></a></Link>
          <Link href="/" passHref><a><Icon name="telegram" className="w-5 h-5 mb-9 cursor-pointer fill-slate-900 hover:fill-red-400 dsm:mb-0"></Icon></a></Link>
          <Link href="/" passHref><a><Icon name="instagram" className="w-5 h-5 cursor-pointer fill-slate-900 hover:fill-red-400 dsm:mb-0"></Icon></a></Link>
        </div>
      </div>

      <div className="py-10 flex justify-between">
        <div>
          <span>“Название” 2022г.</span>
        </div>

        <div>
          <p className="mb-5">Проектирование и дизайн: maria_voloshchenko</p>
          <p>Разработка и интеграция: ereburg</p>
        </div>
      </div>
    </div>
  );
};
