import React from 'react';
import aboutMe from '../../assets/aboutMe.jpg'
import { FaJsSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-40">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="">
                <img alt="..." src={aboutMe} className="shadow-xl rounded-full w-52 -mt-20"/>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
              Ekram Hosen
            </h3>
            <div className="text-sm leading-normal mt-0 text-blueGray-400 font-bold uppercase">
                <p>Dhaka, Bangladesh</p>                
            </div>
            <div className="text-blueGray-600 mt-5">
                <p>Junior web developer</p>                
            </div>
            <div className="text-blueGray-600">
                <p>ekramhosen329@gmail.com</p>               
            </div>
            <div className="text-blueGray-600 my-5">
                <h3 className='text-md leading-normal mt-0 text-blueGray-400 font-bold uppercase'>Skills:</h3>
                <p className='text-base'>C, Javascript, NodeJs, ExpressJs, MongoDb, React, HTML, CSS, Bootstrap, TailwindCSS</p>
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                  <h3 className='text-2xl font-semibold text-blueGray-700'>My Projects</h3>
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                <button class="btn btn-link"><Link to="https://tooth-care-fd1e3.web.app/">Tooth Care</Link></button>               
                <button class="btn btn-link"><Link to="https://phone-link-ab2f7.web.app/">Phone Link</Link></button>               
                <button class="btn btn-link"><Link to="https://ekramh.github.io/elecar-responsive-website/">Elecar</Link></button>               
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
};

export default About;