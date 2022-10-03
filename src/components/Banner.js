import React from 'react'
import image from '../Asset/avasalon.jpg'
import { Link } from 'react-router-dom'
export const Banner = () => {
  return (
    <section className='banner'>
        <section className='text-banner'>
        <h1>Welcome to Ava's Salon</h1>
        <p>Your experience is everything to us. Enter Ava salon to meet our team of highly-trained and passionate stylists ready to give you their very best. Let your individual style shine - along with the health of your hair. We care about you, each other and our communities. Ava is hair care like never before. You can book an appointment to avoid long queues!

        </p>
        <button><Link to='register'>Book Now!</Link></button>
        </section>
        <section className='img-banner'>
            <img src={image} alt=""  />
        </section>
    </section>
  )
}
export default Banner
