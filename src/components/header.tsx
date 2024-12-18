import Link from "next/link";
const Header = () => {
    return (
        <>
            <div className="w-full absolute z-10 text-white">
                <nav className="container relative flex flex-wrap justify-between items-center mx-auto p-8">
                    <Link href="/" className="font-bold text-3xl">home</Link>
                    <div className="space-x-4 text-3xl" >
                        <Link href="/performance">performance</Link>
                        <Link href="/reliability">reliability</Link>
                        <Link href="/scale">scale</Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;