import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className={'container'}>
            <nav className={'nav'}>
                <Link className={'links'} href="/">REMEDIE</Link>
                <ul className={'ul'}>
                    <div className={'botaoNavbar'}>
                        <li className={'li'}>
                            <Link href="/">Home</Link>
                        </li>
                    </div>

                    <div className={'botaoNavbar'}>
                        <li className={'li'}>
                            <Link href="/consultas">Consultas</Link>
                        </li>
                    </div>

                    <div className={'botaoNavbar'}>
                        <li className={'li'}>
                            <Link href="/exames">Exames</Link>
                        </li>
                    </div>

                    <div className={'botaoNavbar'}>
                        <li className={'li'}>
                            <Link href="/remedios">Remédios</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>

  );
}
