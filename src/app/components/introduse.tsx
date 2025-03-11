import Image from "next/image";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TaskIcon from '@mui/icons-material/Task';

const introduse = () => {

    return (
        <div id="home" className="w-[100%] min-h-[640px] flex mt-10">
            <div className="trandition-all duration-300 lg:w-[50%] bg-black text-white p-10 w-[100%]">
                <h2 className="text-6xl py-6 gText">Kaishu<br />Matsuo</h2>
                {/* <p>
                    こんにちは！ 私は松尾海秀です。<br />
                    福岡県久留米市の久留米工業大学で情報工学を専攻している四年生です。<br />
                    主にCGやフロントエンド開発を得意としていますが、
                    他にもバックエンドやデータベース、AIも学んでいます。<br />
                    これまで大学の講義で学んだことを生かして、3DCG作品やウェブサイト製作、
                    「作品１」などに取り組んできました。<br />
                    このページではその中のいくつかのプロジェクトを紹介しています。
                </p> */}
                <div className="sm:flex sm:space-x-4">
                    <section className="my-4 sm:w-1/2">
                        <h4 className="text-2xl gText"><AssignmentIndIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />About me</h4>
                        <p>
                            松尾海秀は久留米工業大学で情報工学を学んでいる。<br />
                            主に3DCGやフロントエンド開発を得意としているが、<br />
                            バックエンドやデータベース、AIにも力を入れている。<br />
                            これまで大学の講義で学んだことを生かして、3DCG作品やウェブサイト製作、
                            「作品１」などに取り組んできた。<br />
                            このページではその中のいくつかのプロジェクトを紹介している。
                        </p>
                    </section>
                    <div className="my-4 sm:w-1/2">
                        <section className="my-4">
                            <h4 className="text-2xl gText"><EngineeringIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />Role</h4>
                            <p>Software Engineer　/　Frontend Developer　/　Backend Developer</p>
                        </section>
                        <section className="my-4">
                            <h4 className="text-2xl gText"><ThumbUpAltIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />Interests</h4>
                            <p>Web Development　/　Mobile Apps　/　AI　/　Data Science</p>
                        </section>
                        <section className="my-4">
                            <h4 className="text-2xl gText"><LocalLibraryIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />Learning</h4>
                            <p>Data Base　/　API　/　Deep Learning</p>
                        </section>
                        <section className="my-4">
                            <h4 className="text-2xl gText"><TaskIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />Projects</h4>
                            <p>Cryptocurrency-dash-board　/　3D - Gallery　/　Weather-App　/　etc.</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="trandition-all duration-300 lg:w-[50%] relative overflow-x-hidden w-[0%]">
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