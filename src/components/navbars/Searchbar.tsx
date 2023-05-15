// React
import { FormEvent } from 'react';

// Third Party
import { Search } from '@mui/icons-material';

interface SearchbarProps {
  value: string;
  onChange: (e: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Searchbar = ({ onChange, value, onSubmit }: SearchbarProps) => {
  return (
    <form onSubmit={(e) => onSubmit(e)} className='flex justify-center p-4'>
      <input
        className='rounded-l-md p-2 w-1/2 outline-none focus:bg-indigo-300/50 font-bold
        transition-all duration-300 text-indigo-500 focus:text-white capitalize'
        placeholder='Titanic...'
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <button
        type='submit'
        className='bg-indigo-400/50 rounded-r-md px-4 text-white'
      >
        <Search />
      </button>
    </form>
  );
};

export default Searchbar;
