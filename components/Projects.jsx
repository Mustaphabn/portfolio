/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import Link from 'next/link'
import ProjectItem from './projectItem'

function Projects() {
  return (
    <div id='projects' className='w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='uppercase text-[#5651e5] tracking-widest'>Projects</h2>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem
            title='Property Finder / Realtor'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
        <ProjectItem
            title='Acme Rockets'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='Tailwind and Vanilla JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'/>
        </div>
    </div>
    </div>
  )
}

export default Projects