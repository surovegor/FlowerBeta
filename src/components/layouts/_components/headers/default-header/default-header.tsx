import Link from 'next/link'
import { Icon } from '@/components/common/icon';
import { FC } from "react";
import type { DefaultHeaderProps } from "./default-header.d";

export const DefaultHeader: FC<DefaultHeaderProps> = () => {
  return (
    <div className="text-xs">
      <div className="bg-zinc-100">
        <div className="max-w-7xl px-4 m-auto h-10 flex items-center justify-between text-gray-400">
          <div className="flex dmd:hidden">
            <div className="flex pr-4">
              <Icon name='tick' className='w-4 h-4'></Icon>
              <span className="pl-2">Свежие поставки цветов каждый день</span>
            </div>
            <div className="flex">
              <Icon name='additionally' className='w-4 h-4'></Icon>
              <span className="pl-2">Доставка по Москве и МО в течение 3 часов</span>
            </div>
          </div>
          <div className="flex dmd:w-full">
            <span className="flex items-center dmd:basis-full">+7 (495) 889 76 54</span>
            <Link href="/" passHref><a><Icon name="whatsapp" className="w-5 h-5 ml-6 cursor-pointer fill-gray-400 hover:fill-red-400"></Icon></a></Link>
            <Link href="/" passHref><a><Icon name="telegram" className="w-5 h-5 ml-2.5 cursor-pointer fill-gray-400 hover:fill-red-400"></Icon></a></Link>
            <Link href="/" passHref><a><Icon name="instagram" className="w-5 h-5 ml-2.5 cursor-pointer fill-gray-400 hover:fill-red-400"></Icon></a></Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl px-4 m-auto w-full">
        <div className="flex justify-between py-8 dmd:py-2">
          <div className="flex">
            <h1 className="bg-gray-200">Logo</h1>
            <div className="text-xs flex flex-col leading-5 ml-12 dmd:hidden">
              <span>Доставка по Москве и МО</span>
              <span className="text-red-400">в течение 3 часов</span>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wider text-red-400 dmd:text-base dsm:hidden">Свежие поставки цветов каждый день!</span>
          </div>

          <div className="flex items-center space-x-12 dsm:space-x-5">
            <Link href="/" passHref><a><Icon name="user" className="w-6 h-6 cursor-pointer"></Icon></a></Link>
            <Link href="/" passHref><a><Icon name="cart" className="w-6 h-6 cursor-pointer"></Icon></a></Link>
            <Link href="/" passHref><a className="hidden dlg:block"><Icon name="menu" className="w-6 h-6 cursor-pointer"></Icon></a></Link>
          </div>
        </div>

        <nav className="flex justify-between font-semibold text-xs text-text-gray pb-5 text-gray-400 dlg:hidden">
          <ul className="flex space-x-4">
            <li className="text-red-400"><a href="/">БУКЕТЫ</a></li>
            <li><Link href="/">ЦВЕТЫ В КОРОБКЕ</Link></li>
            <li><Link href="/">8 МАРТА</Link></li>
            <li><Link href="/">СВАДЕБНЫЙ БУКЕТ</Link></li>
            <li><Link href="/">ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ</Link></li>
            <li><Link href="/">ЦВЕТОЧНЫЕ БОКСЫ</Link></li>
            <li><Link href="/">ПОДАРКИ</Link></li>
          </ul>

          <ul className="flex space-x-4">
            <li><Link href="/">О НАС</Link></li>
            <li><Link href="/">ДОСТАВКА</Link></li>
            <li><Link href="/">КОНТАКТЫ</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
