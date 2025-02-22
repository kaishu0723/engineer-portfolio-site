const skill = () => {
    const skills=[
        {
            category:"Programming Languages",
            items:["HTML/CSS","JavaScript","TypeScript"],
        },
        {
            category:"Frameworks & Libraries",
            items:["React","Next.js","Tailwind CSS"],
        },
        {
            category:"Tools & Platforms",
            items:["Git/GitHub","VS Code"],
        },
    ]
    return (
        <div className="my-[100px]">
            <h2 className="text-6xl p-2 text-center text-blue-400">Tech Stack</h2>
            <div className="mx-auto sm:w-3/5 w-4/5" id="skills">
                {
                    skills.map((skill,index)=>(
                        <div key={index} className="p-4 rounded-md shadow-md my-8">
                            <h3 className="text-2xl">{skill.category}</h3>
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