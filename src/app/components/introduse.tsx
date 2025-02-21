import Image from "next/image";

const introduse = () => {

    return (
        <div id="home" className="w-[100%] min-h-[640px] flex mt-10">
            <div className="trandition-all duration-300 sm:w-[50%] bg-black text-white p-10 w-[100%]">
                <h2 className="text-6xl py-6 text-blue-400">Kaishu<br/>Matsuo</h2>
                {/* <p>
                    こんにちは！ 私は松尾海秀です。<br />
                    福岡県久留米市の久留米工業大学で情報工学を専攻している四年生です。<br />
                    主にCGやフロントエンド開発を得意としていますが、
                    他にもバックエンドやデータベース、AIも学んでいます。<br />
                    これまで大学の講義で学んだことを生かして、3DCG作品やウェブサイト製作、
                    「作品１」などに取り組んできました。<br />
                    このページではその中のいくつかのプロジェクトを紹介しています。
                </p> */}
                <section className="my-4">
                    <h4 className="text-2xl text-blue-400">Role</h4>
                    <p>Software Engineer　/　Frontend Developer　/　Backend Developer</p>
                </section>
                <section className="my-4">
                    <h4 className="text-2xl text-blue-400">Interests</h4>
                    <p>Web Development　/　Mobile Apps　/　AI　/　Data Science</p>
                </section>
                <section className="my-4">
                    <h4 className="text-2xl text-blue-400">Learning</h4>
                    <p>Data Base　/　API　/　Deep Learning</p>
                </section>
                <section className="my-4">
                    <h4 className="text-2xl text-blue-400">Projects</h4>
                    <p>Cryptocurrency-dash-board　/　3D - Gallery　/　Weather-App　/　etc.</p>
                </section>
            </div>
            <div className="trandition-all duration-300 sm:w-[50%] relative overflow-x-hidden w-[0%]">
                <Image
                    src={"/images/tempIntro.png"}
                    alt="bg"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}

export default introduse;