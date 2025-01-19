import { Carousel } from '@mantine/carousel';
import { jobCategory } from '../Data/Data';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
const JobCategory = () => {
    return (
        <div className='mt-20 pb-5'>
            <div className='text-4xl text-mine-shaft-100 mb-3 text-center font-semibold'>Browse <span className="text-bright-sun-400">Job</span> Category</div>
            <div className="text-2xl mx-auto mb-10 text-center text-mine-shaft-300 w-1/2">
                Explore diverse job opportunitines tailored to your skills. Start your career journey today!
            </div>
            <Carousel slideSize="22%" slideGap="md" loop className='[&_button]:opacity-0 [&_button]:hover:opacity-75 hover:[&_button]:opacity-100
      [&_button]:!bg-bright-sun-400 [&_button]:border-none'
                nextControlIcon={<IconArrowRight className='h-8 w-8' />}
                previousControlIcon={<IconArrowLeft className='h-8 w-8' />}
            >
                {jobCategory.map((item, index) => <Carousel.Slide>
                    <div key={index} className='flex flex-col items-center w-64 gap-2 border border-bright-sun-400 rounded-xl p-5
            hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-400'>
                        <div className='p-2 bg-bright-sun-300 rounded-full'>
                            <img className='w-8 h-8' src={`/Category/${item.name}.png`} alt={`${item.name}`} />
                        </div>
                        <div className='text-xl text-mine-shaft-100 font-semibold'>{item.name}</div>
                        <div className='text-sm text-mine-shaft-300 text-center'>{item.desc}</div>
                        <div className='text-bright-sun-300 text-lg'>{item.jobs}+ new job posted</div>
                    </div>
                </Carousel.Slide>)
                }
            </Carousel>
        </div>
    )
}
export default JobCategory