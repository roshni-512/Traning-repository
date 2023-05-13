import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { AiOutlineApple } from 'react-icons/ai'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import CountUp from 'react-countup';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const RatingComponent = () => {
    const [appleRating, setAppleRating] = useState(1)
    const [playRating, setPlayRating] = useState(1)

    const handleRatingApple = (rate) => {
        setAppleRating(rate)
    }
    const handleRatingPlay = (rate) => {
        setPlayRating(rate)
    }
    return (
        <div style={{ backgroundColor: '#EADDF5' }} className='py-3' >
            <div className='container '>
                <div className='row '>
                    <div className='col-xs-12 col-lg-4 my-4' >
                        <Rating
                            onClick={handleRatingApple}
                            initialValue={appleRating}
                            allowFraction={true}
                            size={22}
                            disableFillHover={true}
                            emptyColor={'transparent'}
                            fillColor='#383838'
                        />

                        <p className='m-0 p-1'>{appleRating} App Store <AiOutlineApple /></p>
                    </div>
                    <div className='col-xs-12 col-lg-4 my-4'>
                        <Rating
                            onClick={handleRatingPlay}
                            initialValue={playRating}
                            allowFraction={true}
                            size={22}
                            disableFillHover={true}
                            emptyColor={'transparent'}
                            fillColor='#383838'
                        />
                        <p className='m-0 p-1'>{playRating} App Store <IoLogoGooglePlaystore /></p>
                    </div>
                    <div className='col-xs-12 col-lg-4 my-4'>
                        <p className='m-0 p-1'>+ <CountUp end={100000} /> Satisfied Customers</p>
                        <p className='m-0 p-1' style={{ display: 'flex', alignItems: 'center' }}>See more reviews  <MdKeyboardDoubleArrowRight /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingComponent