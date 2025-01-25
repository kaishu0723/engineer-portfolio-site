//memo
//const products
import Image from "next/image";

const products = () => {
    const products=[//I'll edit this
        {
            title:"Lexus",
            description:"This is a lexus in TOYOTA.",
            media:"/images/lexus_after.png",
            link:"https://www.kurume-it.ac.jp/",
        },
        {
            title:"簡易タスク帳",
            description:"Next.jsフレームワーク学習に作成した最初のプロジェクトです。機能はタスクの追加と削除、完了状態の切り替えです。シンプルなUIで直感的に使用を意識してUI/UXデザインをしました。このプロジェクトで基本的なreact hooks(useState,useEffect)やNext.jsのルーティング、ローカルストレージを使用したデータの保存を学びました。",
            media:"/images/to-do-list.png",
            link:"https://to-do-list-three-sepia-97.vercel.app/",
        },
    ]
    return (
        <div className="mt-10">
            <h2 className="text-3xl text-center text-blue-400">Products</h2>
            <div className="products" id="products"></div>
            {
                products.map((product,index)=>(
                    <a key={index} href={product.link} className="block mx-auto my-10 w-4/5 rounded-lg p-4 shadow-2xl">
                        <h3 className="text-2xl">{product.title}</h3>
                        <hr className="my-4"/>
                        <div  className="flex">
                            <Image
                                src={product.media}
                                alt={product.title}
                                width={320}
                                height={90}
                            />
                            <p className="ml-10">{product.description}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    );
}

export default products;