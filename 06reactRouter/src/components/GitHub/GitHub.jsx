import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/iblameManik')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    //         .catch((error) => console.error('Error fetching data:', error))
    // }, [])
  return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">GitHub Followers: {data.followers} <br />
      <span className="bg-amber-500 text-black rounded-2xl p-[2px]">GitHub Name: {data.name} ({data.login})</span>
      <img src={data.avatar_url} alt="Git Picture" width={300}/>
      </div>
  )
}

export default GitHub

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/iblameManik')
    return response.json()
}
