import React, { useState, useEffect } from 'react';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../../components/Navbar/Navbar.component';
import axios from "axios";
import ControlledCarousel from '../../components/Carousel/Carousel.componenet';

const Home = () => {
    const [topTen, setTopTen] = useState()
    const [customError, setCustomError] = useState('')
    const [topMovies, setTopMovies] = useState([])
    function intialMovieList() {
        const options = {
            method: 'GET',
            url: 'https://data-imdb1.p.rapidapi.com/movie/order/upcoming/',
            params: { page_size: '10' },
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': 'a5f09c23e3mshbef91246228b851p132e37jsn7645aadf1ef6'
            }
        };

        axios.request(options).then(function (response) {

            setTopTen(response.data.results)
            response.data.results && response.data.results.forEach(value => {
                getMovieDetailsByImdbId(value.imdb_id)
            })
        }).catch(function (error) {
            setCustomError(error)
        });
    }
    const getMovieDetailsByImdbId = (ImdbId) => {
        const options = {
            method: 'GET',
            url: `https://data-imdb1.p.rapidapi.com/movie/id/${ImdbId}/`,
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': 'a5f09c23e3mshbef91246228b851p132e37jsn7645aadf1ef6'
            }
        };

        axios.request(options).then(function (response) {
            topMovies.push(response.data.results)

        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        intialMovieList()
    }, [])
    return (<>
        <CustomNavbar />
        <Container>
            <Row>
                <Col lg={8}>
                    {
                        topMovies.length > 0 && <ControlledCarousel topThree={topMovies.slice(0, 3)} />
                    }
                </Col>
            </Row>
        </Container>


    </>);
}

export default Home;