import Image from "next/image";

const header = () => {
    return (
        <div className="bg-white p-4 fixed top-0 left-0 w-full z-40 shadow-lg">
            <nav className="flex mx-auto container items-center">
                <h2 className="text-4xl text-blue-400 w-3/5">Kaishu.dev</h2>
                <div className="space-x-8 w-1/3">
                    <a href="#home" className="hover:text-green-200 trandition-all duration-300"><b>Home</b></a>
                    <a href="#skills" className="hover:text-green-200 trandition-all duration-300"><b>Skills</b></a>
                    <a href="#products" className="hover:text-green-200 trandition-all duration-300"><b>Products</b></a>
                </div>
                <hr />
                <a href="https://github.com/" className="border-l-4 border-blue-400 pl-4">
                    <Image
                    src="/images/github_icon.png"
                    alt="github_icon"
                    width={30}
                    height={30}
                    />
                </a>
            </nav>
        </div>
    );
}

export default header;