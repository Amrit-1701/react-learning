import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
//calling Api 
//using loader to call api

function Git() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Amrit-1701')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <>
            <div className='text-center m-4 bg-gray-500 text-black
     text-3xl p-4'>Github followers: {data.followers}
                <img src={data.avatar_url} alt="git pic" width={300}></img>
            </div>
        </>
    )
}

export default Git

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/Amrit-1701')
    return response.json()

}