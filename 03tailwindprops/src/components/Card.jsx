import React from 'react'

function Card({ username="Turkey", detail="Girls feeding Birds", imgAddress = "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }) {
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
        <img
          src={imgAddress}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{detail}</h2>
        </div>
        <p className="text-gray-300">
          At a beautiful location in Turkey, some Girls are feeding birds. The birds are flying around.
        </p>
      </div>
    </div>
  )
}

export default Card
