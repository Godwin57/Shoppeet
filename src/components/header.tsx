import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="bg-dark">
            <div>
                <Image height={100} width={100} src={'/shoppeet-icon.png'} alt="Shoppeet logo"/>
                Shoppeet
            </div>
            
            <ul>
                <Link href={'#'} className="">Home</Link>
                <Link href={'#'}>Products</Link>
                <Link href={'#'}>Categories</Link>
            </ul>
        </header>
    );
}

export default Header;