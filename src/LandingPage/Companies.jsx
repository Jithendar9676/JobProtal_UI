import { companies } from '../Data/Data';
import Marquee from "react-fast-marquee";
const Companies = () => {
    return (
        <div className='mt-20'>
            <div className='text-4xl text-mine-shaft-100 text-center font-semibold'>Trusted by <span className="text-bright-sun-400">1000+</span> companies</div>
            <Marquee pauseOnHover>
                {
                    companies.map((item, index) => <div className='mt-10 mx-8 px-2 py-1 rounded-lg hover:bg-mine-shaft-900 cursor-pointer' key={index} >
                        <img className='h-14' src={`/Companies/${item}.png`} alt="item" />
                    </div>)
                }
            </Marquee>
        </div>
    )
}
export default Companies; 