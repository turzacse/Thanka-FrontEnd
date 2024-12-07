import img from '../../assets/Image/thanaka1.png'
import icon1 from '../../assets/Icons/img-7_180x.png'
import icon2 from '../../assets/Icons/img-8_180x.png'
import icon3 from '../../assets/Icons/img-9_180x.png'
import icon4 from '../../assets/Icons/img-10_180x.png'
import icon5 from '../../assets/Icons/img-11_180x.png'
import icon6 from '../../assets/Icons/img-12_180x.png'

const Quality = () => {
    const quality = [
        {
            title: 'Organic Face Pack',
            subtitle: 'First or Last all day and gives you smooth gentle skin.',
            icon: icon1
        },
        {
            title: 'Natural Extracts',
            subtitle: 'Natural Aloe Vera, honey, papaya, pulp, argan oil...',
            icon: icon4
        },
        {
            title: 'Quality Assurance',
            subtitle: 'Each product are certified by our quality control.',
            icon: icon2
        },
        {
            title: 'Perfect Blend',
            subtitle: 'First or Last all day and gives you smooth gentle skin.',
            icon: icon5
        },
        {
            title: 'Toxin Free',
            subtitle: 'It enhances your beauty without damaging it.',
            icon: icon3
        },
        
        
        {
            title: 'Natural Aroma',
            subtitle: 'Pleasant aroma of natural fragrance Oils.',
            icon: icon6
        }
    ]
    return (
        <div className='bg-[#F7EEEF] py-20 px-10'>
            <section className='flex justify-between items-center gap-2'>
                <div className='flex-1 flex justify-center items-center'>
                    <img className='h-[300px] w-[300px]' src={img} alt="" />
                </div>

                <div className='flex-1'>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            quality?.map((item, i) => 
                            <div className='flex gap-4'>
                            <div>
                                <img className='w-[50px] h-[50px]' src={item?.icon} alt="" />
                            </div>
                            <div>
                            <h2 className='text-[#467D39] text-xl font-medium'>{item.title}</h2>
                            <p className='text-gray-500'>{item.subtitle}</p>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </section>


    
        </div>
    );
};

export default Quality;