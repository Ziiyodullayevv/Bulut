export default function Loading() {
  return (
    <div className='fixed left-0 right-0 bottom-0 flex flex-col gap-5 justify-center items-center top-0'>
      <img className='w-30' src='/logo.svg' alt='logo' />
      <h2 className='text-center text-[#3a477a]'>Loading...</h2>
    </div>
  );
}
