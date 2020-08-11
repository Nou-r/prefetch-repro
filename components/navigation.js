import navStyles from "./navigation.module.css";
import Link from "next/link";


export default function Navigation() {
    return (
        <div className={navStyles.MainNav}>
            {
                <nav>

                    <Link href="/">
                        <a className={navStyles.MainNavLink}>Home</a>
                    </Link>

                    <Link href="/about">
                        <a className={navStyles.MainNavLink}>About</a>
                    </Link>

                </nav>
            }
        </div>
    );
}
