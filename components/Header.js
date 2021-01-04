import Link from 'next/link';

function Header() {
  return (
    <div id='main-header'>
      <nav id='main' aria-label='main'>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/blog/'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/pokemon/'>
              <a>Pokemons</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
