import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="uppercase tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;

// import { Link } from "react-router-dom";
// import SearchOrder from "../features/order/SearchOrder";

// function Header() {
//   return (
//     <header>
//       <Link to="/">Fast React Pizza Co.</Link>
//       <SearchOrder />
//       <p>PizzaPizza</p>
//     </header>
//   );
// }

// export default Header;
