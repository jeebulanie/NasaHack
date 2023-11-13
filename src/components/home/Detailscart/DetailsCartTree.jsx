import React from 'react'

const DetailsCartTree = () => {
  return (
    <div className="flex flex-row newColor p-8 items-centerw w-2/3 rounded-xl justify-center m-auto  top-0">
      <div className="ml-5">
        <h2 className="text-3xl font-bold"> Flood:</h2>
        <p className="text-xl font-bold ">
          Assess the threat:
          <br />
          Listen to weather forecasts and flood alerts. <br />
          If you notice signs of impending flooding, don't stay down, move to
          higher ground.
          <br />
          Gather important things:
          <br />
          Move valuable documents, medicines, cash and other important things to
          a higher place.
          <br />
          Prepare a backpack with the necessary items (food, water, first aid
          kit, lamp).
          <br />
          Leave early:
          <br />
          If you have to evacuate, do so before the water gets too high.
          <br />
          Follow local authorities' instructions regarding evacuation routes.
          <br />
          Use higher floors:
          <br />
          If you are unable to evacuate, move to the upper floors of the
          building if it is safe to do so.
          <br />
          Do not cross streams of water:
          <br />
          <br />
          Fast flowing water can be very dangerous. Do not attempt to cross
          streams or rivers.
        </p>
        <button className="text-xl mt-2">Close</button>
      </div>
    </div>
  )
}

export default DetailsCartTree