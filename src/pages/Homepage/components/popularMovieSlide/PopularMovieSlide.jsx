import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import { usePopluarMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'bootstrap';
import Carousel from 'react-multi-carousel';
import MovieCard from '../movieCard/MovieCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const PopularMovieSlide = () => {

  const { data, isLoading, isError, error } = usePopluarMoviesQuery();

  if (isLoading) {
    return <h1>Loading..</h1>
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>

  }

  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel
        //swipeable={false}
        //draggable={false}
        //showDots={true}
        //ssr={true} // means to render carousel on server-side.
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={1000}
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      // containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      // dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
      >
        {data.results.map((movie, index) => <MovieCard movie={movie} key={index} />)}
      </Carousel>
    </div>
  )
}

export default PopularMovieSlide
