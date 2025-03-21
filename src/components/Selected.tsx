import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Selected() {
  return (
    <>
      <Select>
        <SelectTrigger className='w-[150px]'>
          <SelectValue placeholder="O'zbekcha" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='light'>O'zbekcha</SelectItem>
          <SelectItem value='dark'>Inglizcha</SelectItem>
          <SelectItem value='system'>Ruscha</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
