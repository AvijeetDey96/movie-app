import React, { useState, useEffect } from 'react';
import { Button, Navbar, Container, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import './Navbar.css'
import logo from '../../assets/imdb.svg'
import {
    useHistory,
    Link
} from "react-router-dom";
import axios from "axios";
const CustomNavbar = ({searchOutput}) => {
    let history = useHistory();
    const [searchData, setSearchData] = useState('')
    const [result, setResult] = useState([])
    const handleChange = (e, type) => {
        switch (type) {
            case 'serach-change':
                console.log(e.target.value);
                setSearchData(e.target.value)
                
                break;

            default:
                break;
        }
    }
    const handleClick = (type) => {
        switch (type) {
            case 'serach-change':
                searchMovieByQuery()
                break;

            default:
                break;
        }
    }

    const searchMovieByQuery = () => {
        var options = {
            method: 'GET',
            url: `https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/${searchData}/`,
            headers: {
              'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
              'x-rapidapi-key': 'a5f09c23e3mshbef91246228b851p132e37jsn7645aadf1ef6'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.results);
              setResult(response.data.results)
              localStorage.setItem('searchValue',JSON.stringify(response.data.results))
              searchOutput(response.data.results)
          }).catch(function (error) {
              console.error(error);
          });
    }
    return (<><Navbar className="navColor" >
        <Container>
            <Navbar.Brand className="text-light"><img onClick={() => history.push('/')} src={logo} height="30px" alt="" /></Navbar.Brand>
            <InputGroup className="">
                <DropdownButton
                    variant="outline-warning"
                    title="All"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" value={searchData} onChange={(e) => handleChange(e, 'serach-change')} />
                {/* <InputGroup.Text  className="outline-warning">00</InputGroup.Text> */}
                &nbsp;&nbsp;
                <b className=" "><Button variant="outline-light" onClick={() => handleClick('serach-change')}>search</Button></b>
            </InputGroup>



        </Container>
    </Navbar></>);
}

export default CustomNavbar;