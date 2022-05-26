import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';

const ReviewHome = () => {
    const {data: reviews, isLoading} = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))

      if(isLoading){
         return <Loading />
      }

    return (
        <div>
            <div>
            <h2 className="text-5xl text-primary font-light text-center my-11">
                Review
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 justify-items-center my-10 mx-3 md:mx-6 lg:mx-12">              
                {
                    reviews.map(review =>
                        <div key={review._id}>
                            <div className="card lg:max-w-lg h-full bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title text-primary">{review.name}</h2>
                                    <p className='text-base'>{review.details}</p>
                                    <p className='font-semibold text-accent'>Rating: {review.rating}/5</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            </div>
        </div>
    );
};

export default ReviewHome;