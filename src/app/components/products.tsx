//memo
//const products
import Image from "next/image";

const products = () => {
    const products=[//I'll edit this
        {
            title:"簡易タスク帳",
            description:"Next.jsフレームワーク学習に作成した最初のプロジェクトです。機能はタスクの追加と削除、完了状態の切り替えです。シンプルなUIで直感的に使用を意識してUI/UXデザインをしました。このプロジェクトで基本的なreact hooks(useState,useEffect)やNext.jsのルーティング、ローカルストレージを使用したデータの保存を学びました。",
            media:"/images/to-do-list.png",
            link:"https://to-do-list-three-sepia-97.vercel.app/",
        },
        {
            title:"デモECサイト",
            description:"Next.js、Express.js、PostgreSQLで開発したECサイト（デモ）です。",
            media:"/images/to-do-list.png",
            link:"https://to-do-list-three-sepia-97.vercel.app/",
        },
    ]
    return (
        <div className="mt-10">
            <h2 className="text-3xl text-center text-blue-400 mb-12">Products</h2>
            <div className="products" id="products"></div>
            {
                products.map((product,index)=>(
                    <a key={index} href={product.link} className="block mx-auto mb-24 container">
                        <h3 className="text-2xl">{product.title}</h3>
                        <hr className="my-4"/>
                        <div  className="flex">
                            <div style={{position:'relative',width:'60%',height:'180px'}}>
                            <Image
                                src={product.media}
                                alt={product.title}
                                fill
                                style={{objectFit:'cover'}}
                            />
                            </div>
                            <p className="ml-10 w-2/3">{product.description}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    );
}

export default products;