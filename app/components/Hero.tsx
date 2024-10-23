import { url } from 'inspector'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='main-h-screen bg-no-repeat bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-7aBTf1ozmHJtk3k2tZLkWICxDWowyKE9g&s")] bg-right lg:bg-[15%] bg-cover
    style={{backgroundSize: "35%"}}'>
        
    
    <section className="flex justify-center items-center text-[2rem] mr-[120px]">
        <div className="text-align: left; font-size-2rem mr-30px m-0 w-65% text-white">Hi, My name is <span className="text-center text-orange-500">Rahat</span>
            <div className='test-center mb 4'>I m a deveploper</div>
            <span id="element"></span>
            <div className="flex justify-center space-x-4 mb-6">
            <button className="btn text-white px-2 py-2 rounded hover:bg-blue-600 bg-blue-500">Download Resume</button>
            <button className="btn bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600">visite LinkedIn</button>
            </div>
        </div>
        <div className="rightsection">
        
            </div>
            </section>
            <hr className='text-lg, font-semibold, text-2xl, font-bold, text-gray-600, text-gray-700
' />
                    
            <section className=" mx-[30px] h-80">
            <span className="text-white">what I have done so far</span>
            <h1 className= "text-2xl font-bold mt-2">
                work Experienced
            </h1>
            <div className="box space-y-4">
                <div className="vertical">
                
                <div className="vertical -title text-lg font-semibold">
                    HTML deveploper (2020-2022)
                </div>
                <div className="vertical-desc text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Beatae magni nemo dio fugiat, Perferendis
                    earum tenetur praesentium laborum, dignissimos
                    ipsa at ad vitae optio asperiores laudantium
                    maiores, sapiente debitis voluptate modi ea
                    voluptates voluptatibus.
                    </div>
                </div>
                </div>
<div className="vertical">
    <div className="vertical-title lg font-semibold">TYPESCRIPT Developer</div>
    <div className="vertical-desc text-white">
    Lorem ipsum dolor sit amet,consectetur adipisicing elit. Error, nihil
    id temporibus qui expedita hic doloribus sequi numquam, quo, atque
    Perferendis aspernatur molestias? consectetur, non. Est, perspiciatis
    veritatis laborum repelllendus Perferendis provident aliquid beatae!
</div>
</div>


</section>

</div>

    
    
    
    
  )
}

export default Hero
