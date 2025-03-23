import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
type Props = {
  width: string;
  height?: string;
};

export default function Selected({ width, height }: Props) {
  return (
    <Select>
      <SelectTrigger style={{ width: `${width}`, height: `${height}` }}>
        <SelectValue placeholder="O'zbekcha" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='light'>O'zbekcha</SelectItem>
        <SelectItem value='dark'>Inglizcha</SelectItem>
        <SelectItem value='system'>Ruscha</SelectItem>
      </SelectContent>
    </Select>
  );
}
