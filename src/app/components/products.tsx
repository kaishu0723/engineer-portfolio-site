//memo
//const products
import Image from "next/image";

const products = () => {
    const products = [//I'll edit this
        {
            title: "Simple Task Note",
            description: "Next.jsフレームワークを利用した素早く記述できる。",
            media: "/images/to-do-list.png",
            link: "https://github.com/kaishu0723/to-do-list",
            tools: ["TypeScript", "Next.js"],
        },
        {
            title: "New Project",
            description: "製作中...",
            media: "/images/comingSoon.png",
            link: "https://github.com/kaishu0723/",
            tools: [],
        },
    ]
    return (
        <div className="my-[100px]">
            <h2 className="text-6xl text-center text-blue-400 mb-12">Products</h2>
            <ul className="flex flex-wrap mx-auto w-3/5 justify-center" id="products">
                {
                    products.map((product, index) => (
                        <li key={index}
                        className="w-1/3 h-[320px] rounded-md shadow-lg my-10 mx-8 relative overflow-hidden bg-white bottom-0 hover:bottom-4 hover:bg-blue-100 trandition-all duration-300 min-w-[320px]">
                            <a href={product.link}>
                                <div className="w-[100%] h-[120px] relative">
                                    <Image
                                        src={product.media}
                                        alt="media"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl p-4 font-medium text-black">{product.title}</h3>
                                <p className="text-gray-400 px-4">{product.description}</p>
                                <ul className="flex absolute bottom-4">
                                    {product.tools.map((tool, id) => (
                                        <li key={id} className="bg-gray-100 rounded-md shadow-sm p-2 ml-4">{tool}</li>
                                    ))}
                                </ul>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default products;