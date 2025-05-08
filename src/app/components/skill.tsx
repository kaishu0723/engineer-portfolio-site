const skill = () => {
    const skills=[
        {
            category:"Programming Languages",
            items:["HTML/CSS","JavaScript","TypeScript","Python","C#","C/C++","Java"],
        },
        {
            category:"Frameworks & Libraries",
            items:["React","Next.js","Tailwind CSS","Masonry CSS","Three.js"],
        },
        {
            category:"Tools & Platforms",
            items:["Git/GitHub","VS Code","Unity","Unreal Engine"],
        },
        {
            category:"License",
            items:["英検準二級","普通自動車運転免許","CGクリエイター検定エキスパート"],
        },
    ]
    return (
        <div className="my-[100px] mx-8">
            <h2 className="text-6xl p-2 text-center gText">Tech Stack</h2>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2" id="skills">
                {
                    skills.map((skill,index)=>(
                        <div key={index} className="relative p-4 my-8">
                            <h3 className="text-2xl gText inline-block">{skill.category}</h3>
                            <hr className="my-4"/>
                            <ul className="my-2 block">
                            {
                                skill.items.map((item,idx)=>(
                                    <li key={idx} className="my-2 p-2 rounded-md bg-gray-100 shadow-sm">{item}</li>
                                ))
                            }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default skill;