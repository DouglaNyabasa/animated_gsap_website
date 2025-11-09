import React from 'react'

const Nutrition = () => {
  return (
    <div className='nutrition-section'>
      <img src="/images/slider-dip.png" alt="" className='w-full object-cover'/>
      <img src="/images/big-img.png" alt=""  className='big-img'/>
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20 ">
            <div className="general-title relative flex flex-col justify-center gap-24 items-center">
                <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
              <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow">Body Good</h2>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nutrition
