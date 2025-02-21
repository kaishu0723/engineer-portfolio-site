import Image from "next/image";

const header = () => {
    return (
        <div className="fixed shadow-lg w-[100%] z-40 bg-white p-4 top-0">
            <nav className="flex items-center relative">
                <h2 className="text-4xl text-blue-400 ml-6">Kaishu.dev</h2>
                <div className="space-x-10 space mx-auto w-[220px] relative right-[110px]">
                    <a href="#home" className="hover:text-green-200 trandition-all duration-300"><b>About</b></a>
                    <a href="#products" className="hover:text-green-200 trandition-all duration-300"><b>Products</b></a>
                    <a href="#skills" className="hover:text-green-200 trandition-all duration-300"><b>Skills</b></a>
                </div>
                <a href="https://github.com/" className="border-l-4 border-blue-400 pl-4 absolute right-2">
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