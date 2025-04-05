import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  width: string;
  height?: string;
};

export default function Selected({ width, height }: Props) {
  const { t, i18n } = useTranslation();
  const currentLang = localStorage.getItem('lang') || i18n.language;
  const [language] = useState(currentLang);

  const handleChange = (lang: string) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang).then(() => {
      window.location.reload(); // Sahifani qayta yuklash
    });
  };

  return (
    <Select value={language} onValueChange={handleChange}>
      <SelectTrigger className='font-popins' style={{ width, height }}>
        <SelectValue placeholder={t('lang.placeholder')} />
      </SelectTrigger>
      <SelectContent className='text-c1 font-popins'>
        <SelectItem value='uz'>O'zbekcha</SelectItem>
        <SelectItem value='en'>English</SelectItem>
        <SelectItem value='ru'>Русский</SelectItem>
      </SelectContent>
    </Select>
  );
}
