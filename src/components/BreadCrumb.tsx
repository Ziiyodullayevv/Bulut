import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbList = [
    { name: 'Asosiy', url: '/' },
    ...pathnames.map((pathname, index) => {
      const url = `/${pathnames.slice(0, index + 1).join('/')}`;
      return {
        name: pathname.charAt(0).toUpperCase() + pathname.slice(1),
        url,
      };
    }),
  ];

  const breadcrumbJSON = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbList.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://bulutpaper.uz${item.url}`,
    })),
  };

  return (
    <nav aria-label='breadcrumb' style={{ display: 'none' }}>
      <script type='application/ld+json'>
        {JSON.stringify(breadcrumbJSON)}
      </script>
    </nav>
  );
};

export default Breadcrumb;
