import React, { useState } from "react";
import DetailsCartvolcan from "./Detailscart/DetailsCartvolcan";
import DetailsCartflood from "./Detailscart/DetailsCartflood";
import { useSelector } from "react-redux";

const NewsCart = () => {
  return (
    <div className="h-full">
      <section className="p-4 lg:p-8  text-gray-100 h-full">
        <div className=" mx-auto space-y-12 h-full">
          <div className="newColor flex flex-col overflow-hidden rounded-md p-8  shadow-sm lg:flex-row h-96 items-center">
            <img
              src="https://www.5.ua/media/pictures/400x266/190482.jpg?t=1596524788"
              alt=""
              className="bg-gray-500 aspect-video w-1/4 h-full rounded-xl"
            />
            <div className="flex flex-col justify-center flex-1 p-6 h-full">
              <span className="text-xs uppercase text-gray-400 h-full"></span>
              <h3 className="text-3xl">Tips to survive floods</h3>
              <p className="my-6 text-gray-400 h-full">
                Listen to weather forecasts and flood alerts. <br />
                If you notice signs of impending flooding, don't stay down, move
                to higher ground. Communication: Try to notify loved ones about
                your place and your condition. Avoid cars: If you are in a car,
                stop, but do not stop under bridges or in tunnels. If possible,
                rock the vehicle and drive uphill. Listen to radio and
                television: Listen to local news on radio or television for
                up-to-date information. Pay attention to signs of nature: If the
                water begins to rapidly recede from the shore, this may be a
                sign of a tsunami. Also pay attention to the sounds of visible
                waves. Study evacuation routes: Study local escape routes and
                shelter points in advance. Remember that natural defenses are
                not always beneficial and it is important to be prepared to
                address them at any time.
                <br />
                Gather important things:
              </p>
              <button type="button" className="self-start h-full " id="1">
                Details Info
              </button>
            </div>
            <img
              className="bg-gray-500 aspect-video w-1/4 rounded-xl h-full"
              src="https://i.pinimg.com/originals/5a/7c/be/5a7cbe8790fe471f178068bd6f99fa2c.gif"
              alt=""
            />
          </div>
          {/* <DetailsCartflood/> */}
          <div className="newColor flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse p-6 h-96 items-center">
            <img
              src="https://hightech.fm/wp-content/uploads/2022/11/explosive-volcano-with-burning-lava-neon-light-dark-futuristic-nature-scene-3d-render.jpg"
              alt=""
              className="bg-gray-500 aspect-video w-1/4 rounded-xl h-full"
            />
            <div className="flex flex-col justify-center flex-1 p-6 text-right">
              <span className="text-xs uppercase text-gray-400"></span>
              <h3 className="text-3xl ">
                "Israel is at war." Hamas attack in the south of the country
              </h3>
              <p className="my-6 text-gray-400">
                A state of war has been officially declared in Israel and a
                state of emergency has been declared. Since the morning of
                October 7, the Palestinian group Hamas, which controls the Gaza
                Strip, has been massively shelling Israel. Dozens of Israeli
                soldiers and civilians are killed and taken hostage, and
                hundreds are wounded.
              </p>
              <button type="button" className="self-start h-full ">
                Details Info
              </button>
            </div>
            <img
              className="bg-gray-500 aspect-video w-1/4 rounded-xl h-full"
              src="https://99px.ru/sstorage/86/2020/09/image_862109201330121507887.gif"
              alt=""
            />
          </div>
          {/* <DetailsCartvolcan/> */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row newColor h-96 p-6">
            <img
              src="https://www.akchabar.kg/media/news/d4f8ad7e-0cd0-490f-a2ac-1fc701e9b199.jpg.850x445_q82_crop.jpg"
              alt=""
              className="bg-gray-500 aspect-video w-1/4 rounded-xl h-full"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase text-gray-400"></span>
              <h3 className="text-3xl">Forest covers</h3>
              <p className="my-6 text-gray-400">
                Tree covers are the various types of vegetation that cover the
                ground in a forested area. Such integuments can vary
                significantly in composition, structure and function. Below are
                some of the most common forest covers: Herbaceous cover: Some
                forests are dominated by herbaceous cover, consisting mainly of
                grasses, grasses and other small plants. Such forests may be
                characteristic of northern regions, where short summers do not
                allow trees to fully develop. Shrub cover: In certain climatic
                conditions, forests can be represented mainly by shrubs. Shrub
                cover is common in middle and subtropical zones.
              </p>
              <button type="button" className="self-start">
                Details Info
              </button>
            </div>
            <img
              className="bg-gray-500 aspect-video w-1/4 rounded-xl h-full"
              src="https://i.gifer.com/BTe4.gif"
              alt=""
            />
          </div>
          <div className="newColor flex flex-col overflow-hidden rounded-md p-8  shadow-sm lg:flex-row h-96 items-center">
            <img
              src="http://www.qwrt.ru/images/2014/03/28/таяние-льда-Антарктики-956055.gif"
              alt=""
              className="bg-gray-500 aspect-video w-1/4 h-full rounded-xl"
            />
            <div className="flex flex-col justify-center flex-1 p-6 h-full text-right">
              <span className="text-xs uppercase text-gray-400 h-full"></span>
              <h3 className="text-3xl">Ice sheets</h3>
              <p className="my-6 text-gray-400 h-full">
                Various ice sheets are important to our planet in many aspects,
                including climate, ecosystems, sea levels and the hydrological
                cycle. Here are a few key ice sheets and their importance:
                Arctic ice cover: Climate impact: The Arctic ice sheet plays an
                important role in regulating global climate. The white color of
                the ice reflects solar radiation, which helps cool the
                atmosphere. Maritime transport accessibility: Reducing ice in
                the Arctic opens up new maritime transport routes, which has
                implications for global trade. Antarctic Ice Sheet: Sea levels:
                The Antarctic ice sheet contains vast reserves of fresh water,
                and its melting could significantly affect sea levels around the
                world. Biodiversity: Antarctica's ice sheets reveal unique
                marine biology, and changing ice can affect the ecosystem.
              </p>
              <button type="button" className="self-start h-full ">
                Details Info
              </button>
            </div>
            <img
              className="bg-gray-500 aspect-video w-1/4 rounded-xl h-full"
              src="https://mir-znaniy.com/wp-content/uploads/2017/03/18414124_2dff8f9084060b3250055cf62c5d5aac_800.jpg"
              alt=""
            />
          </div>
          <div className="newColor flex flex-col overflow-hidden rounded-md p-8  shadow-sm lg:flex-row h-96 items-center">
            <img
              src="https://www.eg.ru/wp-content/uploads/2017/12/17324251306034508.jpg"
              alt=""
              className="bg-gray-500 aspect-video w-1/4 h-full rounded-xl"
            />
            <div className="flex flex-col justify-center flex-1 p-6 h-full">
              <span className="text-xs uppercase text-gray-400 h-full">
                Join, it's free
              </span>
              <h3 className="text-3xl">Earthquake</h3>
              <p className="my-6 text-gray-400 h-full">
                Earthquakes are assessed using various scales and rating
                systems. The two most common methods for rating earthquakes
                include the magnitude scale and the intensity scale: Magnitude
                scale: Magnitude is a measure of the energy released by an
                earthquake. It is measured by a quantity known as magnitude. The
                higher the magnitude, the more powerful the earthquake. The most
                well-known magnitude scale is the Richter scale. However, more
                modern scales such as the moment magnitude scale (Mw) are now
                commonly used to estimate the magnitude of earthquakes.
              </p>
              <button type="button" className="self-start h-full ">
                Details Info
              </button>
            </div>
            <img
              className="bg-gray-500 aspect-video w-1/4 rounded-xl h-full"
              src="https://i.gifer.com/E8pZ.gif "
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsCart;
