import Intro from "./Intro"
import Navbar  from "./Navbar"
import Menu from "./Menu"

const Header = () => {

  return (
    <header>
        <div class="flex flex-row">
            <h1 class="text-2xl font-bold w-5/6 sm:w-1/2">
                Valutazione Accessibilità <br/> Comuni Italiani
            </h1>
            <Navbar/>
            <Menu/>
        </div>
        <Intro/>
    </header>
  );
}
 
export default Header;