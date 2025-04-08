'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { AlignRight } from 'lucide-react';
import Selected from './Selected';
import { t } from 'i18next';
import { useState } from 'react';

export default function DriwerComponent() {
  const [open, setOpen] = useState(false);

  // Sahifa reloadsiz URL + scroll qilish funksiyasi
  const handleNavigation = (path: string, id: string) => {
    setOpen(false); // Drawer'ni yopamiz
    setTimeout(() => {
      window.history.pushState(null, '', path); // URL'ni o'zgartiramiz
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Scroll
      }
    }, 500);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger onClick={() => setOpen(true)}>
        <AlignRight size={35} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-4xl font-popins text-center text-black/80'>
            {t('header.menu')}
          </DrawerTitle>
          <DrawerDescription>
            <nav className='flex flex-col font-popins text-lg py-5 gap-4'>
              <a
                className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                href='/order'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/order', 'order');
                }}
              >
                {t('header.a1')}
              </a>

              <a
                className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                href='/partners'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/partners', 'partners');
                }}
              >
                {t('header.a2')}
              </a>

              <a
                className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                href='/about'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/about', 'about');
                }}
              >
                {t('header.a3')}
              </a>

              <a
                className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                href='/contact'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/contact', 'contact');
                }}
              >
                {t('header.a4')}
              </a>
            </nav>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Selected width='100%' height='48px' />
          <Button
            className='w-full font-popins mt-4 h-12'
            variant='default'
            onClick={() => setOpen(false)}
          >
            {t('header.cancel')}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
