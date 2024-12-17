import Link from "next/link";
const Header = () => {
    return (
        <>
            <div>
                <Link href="/">home</Link>
                <Link href="/performance">performance</Link>
                <Link href="/reliability">reliability</Link>
                <Link href="/scale">scale</Link>
            </div>
        </>
    );
};

export default Header;