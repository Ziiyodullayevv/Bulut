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
      <SelectTrigger style={{ width, height }}>
        <SelectValue placeholder={t('lang.placeholder')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='uz'>{t('lang.uz')}</SelectItem>
        <SelectItem value='en'>{t('lang.en')}</SelectItem>
        <SelectItem value='ru'>{t('lang.ru')}</SelectItem>
      </SelectContent>
    </Select>
  );
}
