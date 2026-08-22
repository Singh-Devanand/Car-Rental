import React from 'react'
import { assets } from '../assets/assets'
import {motion} from "motion/react"

const Testimonial = () => {

    const testimonials = [
        {
            name: "Emma Rodriguez",
            location: "Barcelona, Spain",
            image: assets.testimonial_image_1,
            testimonial: "I've rented cars from various companies, but the experience with CarRental was exceptional."
        },
        {
            name: "John Smith",
            location: "New York, USA",
            image: assets.testimonial_image_2,
            testimonial: "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!"
        },
        {
            name: "Ava Johnson",
            location: "Sydney, Australia",
            image: assets.testimonial_image_1,
            testimonial: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service."
        }
    ]

    return (
        <section className='py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-white'>

            {/* Heading */}
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-medium text-gray-800'>
                    What Our Customers Say
                </h2>

                <p className='mt-3 text-gray-500 max-w-xl mx-auto'>
                    Discover why thousands of customers trust CarRental for
                    their journeys.
                </p>
            </div>

            {/* Testimonials */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {testimonials.map((item, index) => (
                    <motion.div
                    intinal={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.6,delay:index*0.2,ease:"easeOut"}}
                    viewport={{once:true,amout:0.3}}
                        key={index}
                        className='bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:-translate-y-1 transition-all duration-300'
                    >

                        {/* User */}
                        <div className='flex items-center gap-4'>

                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-12 h-12 rounded-full object-cover'
                            />

                            <div>
                                <h3 className='font-medium text-gray-800'>
                                    {item.name}
                                </h3>

                                <p className='text-sm text-gray-500'>
                                    {item.location}
                                </p>
                            </div>

                        </div>

                        {/* Stars */}
                        <div className='flex gap-1 mt-4 text-blue-600 text-lg'>
                            ★★★★★
                        </div>

                        {/* Testimonial */}
                        <p className='mt-4 text-gray-500 text-sm leading-6'>
                            "{item.testimonial}"
                        </p>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}

export default Testimonial