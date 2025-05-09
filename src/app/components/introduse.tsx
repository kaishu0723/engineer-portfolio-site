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
                <div className="sm:flex sm:space-x-4">
                    <section className="my-4 sm:w-1/2">
                        <h4 className="text-2xl gText"><AssignmentIndIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />About me</h4>
                        <p>
                            こんにちは、松尾海秀です。<br />
                            私は現在、久留米工業大学で情報工学を学んでいます。<br />
                            得意分野は3DCG、フロントエンド開発、データベース操作、AIです。<br />
                            大学で学んだことを生かして、簡易タスク帳や文字数カウント、ゲーム開発などをしてきました。<br />
                            その中のいくつかをこのページでは紹介しています。
                        </p>
                    </section>
                    <div className="my-4 sm:w-1/2">
                        <section className="my-4">
                            <h4 className="text-2xl gText"><EngineeringIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />Role</h4>
                            <p>Software Engineer　/　Frontend Developer　/　Backend Developer</p>
                        </section>
                        <section className="my-4">
                            <h4 className="text-2xl gText"><ThumbUpAltIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />Interests</h4>
                            <p>Web Development　/　Mobile Apps　/　AI　/　Data Analyst</p>
                        </section>
                        <section className="my-4">
                            <h4 className="text-2xl gText"><LocalLibraryIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />Learning</h4>
                            <p>Data Base　/　API　/　Deep Learning</p>
                        </section>
                        <section className="my-4">
                            <h4 className="text-2xl gText"><TaskIcon style={{ color: '#FF64FF' }} className="relative top-[-3px] mr-2" />Projects</h4>
                            <p>To Do List　/　Character Counter　/　Schedule　/　etc.</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="trandition-all duration-300 lg:w-[50%] lg:h-auto lg:relative lg:right-0 lg:top-0 lg:rounded-none overflow-x-hidden absolute right-4 top-[90px] sm:w-[200px] sm:h-[200px] w-[120px] h-[120px] rounded-full">
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