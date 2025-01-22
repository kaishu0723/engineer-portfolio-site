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
        <div className="mt-10">
            <h2 className="text-3xl p-2 text-center text-blue-400">Skills</h2>
            <div className="flex justify-between mx-auto container" id="skills">
                {
                    skills.map((skill,index)=>(
                        <div key={index} className="w-1/3 p-4">
                            <h3 className="text-2xl">{skill.category}</h3>
                            <ul className="my-2">
                            {
                                skill.items.map((item,idx)=>(
                                    <li key={idx} className="list-disc ml-4 p-1">{item}</li>
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