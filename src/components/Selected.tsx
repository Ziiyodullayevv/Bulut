import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  width: string;
  height?: string;
};

export default function Selected({ width, height }: Props) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    localStorage.setItem('lang', language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Select value={language} onValueChange={setLanguage}>
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
