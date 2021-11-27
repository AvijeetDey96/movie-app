import React, { useState, useEffect } from 'react';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../../components/Navbar/Navbar.component';
import axios from "axios";
import ControlledCarousel from '../../components/Carousel/Carousel.componenet';
import CustomCard from '../../components/Card/Card.component';

const Home = () => {
    const [topTen, setTopTen] = useState()
    const [customError, setCustomError] = useState('')
    const [topMovies, setTopMovies] = useState([])
    //  const [searchValue, setSearchValue] = useState(JSON.parse(localStorage.getItem('searchValue')))
    const [searchValue, setSearchValue] = useState()
    // let topMovies =[];
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
            console.log('response.data.results', response.data.results);
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
            console.log('topMovies', topMovies)
            // topMovies =response.data.results;
            setTopMovies(topMovies)
            // console.log('topMovies', topMovies);

        }).catch(function (error) {
            console.error(error);
        });
    }

    //componentdidmount
    useEffect(() => {
        intialMovieList()
        return () => {
            localStorage.removeItem('searchValue')
        }
    }, [])
    useEffect(() => {
        console.log('searchValue', localStorage.getItem('searchValue'));
        setSearchValue(localStorage.getItem('searchValue'))
    }, localStorage.getItem('searchValue'))

    const getSearch = (e) => {
        setSearchValue(e)
        console.log('ekhane', e);
    }
    if (searchValue) {
        return (<>
            <CustomNavbar searchOutput={(e) => getSearch(e)} />
            {searchValue.length == 0 && <p className="App">No Data Found</p>}
        </>)
    }
    else {
        return (<>
            <CustomNavbar searchOutput={(e) => getSearch(e)} />
            <Container>
                <Row>
                    <Col lg={8}>
                        {
                            <ControlledCarousel topThree={topMovies.slice(0, 3)} />
                        }
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <br />
                        <p className="h3 text-warning"><b>Fan favorites</b></p>
                        <p className="text-muted h5" ><b>This week's top TV and movies </b></p>
                    </Col>
                    <Col lg={12}>
                        <Container className="horizontal-scrollable">
                            <Row>
                                <br />
                                {

                                    topMovies.map((movie, index) => {
                                        return (
                                            <Col lg={4} key={index} className="">
                                                <CustomCard movie={movie} />
                                            </Col>

                                        )
                                    })

                                }
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>


        </>);
    }




}










export default Home;