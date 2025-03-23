import {
  Drawer,
  DrawerClose,
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

export default function DriwerComponent() {
  return (
    <Drawer>
      <DrawerTrigger>
        <AlignRight size={35} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-4xl text-center text-black/80'>
            Menu
          </DrawerTitle>
          <DrawerDescription>
            <nav className='flex flex-col text-lg py-5 gap-5'>
              <DrawerClose>
                <a
                  className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                  href='#'
                >
                  Buyurtma qilish
                </a>
              </DrawerClose>

              <DrawerClose>
                <a
                  className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                  href='#'
                >
                  Hamkorlarimiz
                </a>
              </DrawerClose>

              <DrawerClose>
                <a
                  className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                  href='#'
                >
                  Biz haqimizda
                </a>
              </DrawerClose>
              <DrawerClose>
                <a
                  className='hover:text-black bg-gray-50 px-4 h-14 flex justify-center items-center rounded-md hover:bg-gray-200 text-gray-700'
                  href='#'
                >
                  Bog‘lanish
                </a>
              </DrawerClose>
            </nav>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Selected width='100%' height='48px' />

          <DrawerClose>
            <Button className='w-full mt-4 h-12' variant='default'>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
