import { HashLink } from 'react-router-hash-link';

const Menu = () => {
  return (
    <nav class="flex-row justify-end items-center sm:w-1/2 space-x-4 font-bold hidden sm:flex">
        <HashLink to="#dati" class="hover:underline hover:decoration-wavy focus:outline focus:outline-black focus:outline-offset-2 focus:outline-2">Dati</HashLink>
        <HashLink to="#progetto" class="hover:underline hover:decoration-wavy focus:outline focus:outline-black focus:outline-offset-2 focus:outline-2">Progetto</HashLink>
        <HashLink to="#criteri" class="hover:underline hover:decoration-wavy focus:outline focus:outline-black focus:outline-offset-2 focus:outline-2">Criteri</HashLink>
    </nav> 
  );
}
 
export default Menu;

