const skill = () => {
    const skills=[
        {
            category:"Programming Languages",
            items:["HTML/CSS","JavaScript","TypeScript","Python","C#","C/C++"],
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
        <div className="my-[100px]">
            <h2 className="text-6xl p-2 text-center gText">Tech Stack</h2>
            <div className="mx-auto sm:w-3/5 w-4/5" id="skills">
                {
                    skills.map((skill,index)=>(
                        <div key={index} className="p-4 rounded-md shadow-md my-8">
                            <h3 className="text-2xl gText inline-block">{skill.category}</h3>
                            <hr className="my-4"/>
                            <ul className="my-2 flex flex-wrap">
                            {
                                skill.items.map((item,idx)=>(
                                    <li key={idx} className="m-2 p-2 rounded-md bg-gray-100 shadow-sm">{item}</li>
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