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

  // Sahifadagi tegishli qismga borib, drawer'ni yopish funksiyasi
  const handleNavigation = (id: string) => {
    setOpen(false); // Drawer'ni yopamiz
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Drawer yopilishini kutib, keyin harakatlanamiz
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger onClick={() => setOpen(true)}>
        <AlignRight size={35} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-4xl text-center text-black/80'>
            {t('header.menu')}
          </DrawerTitle>
          <DrawerDescription>
            <nav className='flex flex-col text-lg py-5 gap-5'>
              <a
                className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                href='#order'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('order');
                }}
              >
                {t('header.a1')}
              </a>

              <a
                className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                href='#partners'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('partners');
                }}
              >
                {t('header.a2')}
              </a>

              <a
                className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                href='#about'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('about');
                }}
              >
                {t('header.a3')}
              </a>

              <a
                className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                href='#contact'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('contact');
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
            className='w-full mt-4 h-12'
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
