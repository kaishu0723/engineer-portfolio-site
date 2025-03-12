import AdjustIcon from '@mui/icons-material/Adjust';

const list = () => {
    const licenses=[
        {
            days:"2022 / 7",
            name:"英検準二級"
        },
        {
            days:"2023 / 4",
            name:"普通自動車運転免許"
        },
        {
            days:"2024 / 12",
            name:"CGクリエイター検定エキスパート"
        },
    ]
    return (
        <div>
            <h2 className='gText text-center text-6xl my-10'>License</h2>
            <ul className='w-3/5 mx-auto'>
                {
                    licenses.map((license,index)=>(
                        <li key={index}>
                            <div className='flex'>
                            <p className='w-[70px]'>{license.days}</p>
                            <AdjustIcon className='mx-4 text-purple-500'/>
                            <p>{license.name}</p>
                            </div>
                            <span className='block w-[1px] h-[100px] gBack ml-[97px] my-2'></span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default list;