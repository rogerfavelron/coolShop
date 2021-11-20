import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styled, { css } from 'styled-components';
import { ImCross } from "react-icons/im";
import { FaSave } from 'react-icons/fa'


const OnePiece = () => {

    const [totalData, setTotalData] = useState([]);
    const [crew, setCrew] = useState('straw-hat-pirates');
    const [sorting, setSorting] = useState('');
    const [filtering, setFiltering] = useState(false);

    useEffect(() => {
        const getOpData = async () => {
            const getCrews = await axios.get('http://localhost:8000/crews');
            let data = getCrews.data;
            data = data[crew];
            console.log("dataa", data);
            setTotalData(data);
        }
        getOpData()
    }, [crew])

    const changeFiltering = () => {
        if (filtering === false) {
            console.log("filter was false, now it should be true");
            setFiltering(true)
        }
        else {
            console.log("filter was true, now it should be false")
            setFiltering(false)
        }
    }

    const handleCrewChange = (e) => {
        const id = e.target.id;
        const checked = e.target.checked;
        console.log("name: ", id, "checked ", checked);
        setCrew(id)
    }

    const changeSorting = (e) => {
        const id = e.target.id;
        console.log("id", id);
        setSorting(id);

    }
    const saveFilters = () => {
        console.log("we are trying to save the filters", sorting)
        if (sorting === "highToLow") {
            console.log("it should be descending");
            const descendingOrder = totalData.sort((a, b) => b.price - a.price);
            console.log(descendingOrder);
            setTotalData(descendingOrder)
        }
        else {
            console.log("it should be ascending");
            const ascendingOrder = totalData.sort((a, b) => a.price - b.price);
            console.log(ascendingOrder);
            setTotalData(ascendingOrder)
        }
        setFiltering(false)
    }
    return (
        <div>
            <FilterSection>
                <FilterButton onClick={changeFiltering}>Filter</FilterButton>
            </FilterSection>
            <ProductsWrapper>
                {totalData.map((product, index) =>
                    <ProductCard key={index} name={product.name} price={product.price} imageUrl={product.image} />
                )}
            </ProductsWrapper>
            <FilteringDiv isFiltering={filtering}>
                <FilterInstanceWrapper>
                    <FilterInstanceTitle>Sort by price</FilterInstanceTitle>
                    <FilterInstanceBody>
                        <div style={{ padding: "0.5rem" }}>
                            <input onChange={changeSorting} type="radio" id="lowToHigh" name="radio" />
                            <label for="lowToHigh"> Low to high</label> <br />
                        </div>
                        <div onChange={changeSorting} style={{ padding: "0.5rem" }}>
                            <input type="radio" id="highToLow" name="radio" />
                            <label for="highToLow"> High to low</label> <br />
                        </div>

                    </FilterInstanceBody>
                </FilterInstanceWrapper>
                <FilterInstanceWrapper>
                    <FilterInstanceTitle>Crew</FilterInstanceTitle>
                    <FilterInstanceBody>
                        <div style={{ padding: "0.5rem" }}>
                            <input onChange={handleCrewChange} type="radio" id="straw-hat-pirates" name="pirates" />
                            <label for="straw-hat-pirates"> Straw Hat Pirates</label> <br />
                        </div>
                        <div style={{ padding: "0.5rem" }}>
                            <input onChange={handleCrewChange} type="radio" id="whitebeard-pirates" name="pirates" />
                            <label for="whitebeard-pirates"> Whitebeard Pirates</label> <br />
                        </div>
                        <div style={{ padding: "0.5rem" }}>
                            <input onChange={handleCrewChange} type="radio" id="roger-pirates" name="pirates" />
                            <label for="roger-pirates"> Roger Pirates</label> <br />
                        </div>
                        <div style={{ padding: "0.5rem" }}>
                            <input onChange={handleCrewChange} type="radio" id="big-mom-pirates" name="pirates" />
                            <label for="big-mom-pirates"> Big Mom Pirates</label> <br />
                        </div>
                        <div style={{ padding: "0.5rem" }}>
                            <input onChange={handleCrewChange} type="radio" id="red-hair-pirates" name="pirates" />
                            <label for="red-hair-pirates"> Red Hair Pirates</label> <br />
                        </div>
                        <div style={{ padding: "0.5rem" }}>
                            <input onChange={handleCrewChange} type="radio" id="beast-pirates" name="pirates" />
                            <label for="beast-pirates"> Beast Pirates</label> <br />
                        </div>

                    </FilterInstanceBody>
                </FilterInstanceWrapper>
                <ButtonWrapper>
                    <StyledButton onClick={saveFilters} ><FaSave /> </StyledButton>
                    <StyledButton onClick={changeFiltering} ><ImCross /> </StyledButton>

                </ButtonWrapper>

            </FilteringDiv>

            {/*
            <ProductCard name="Imac" price={1299} imageUrl = "https://i.ibb.co/ncS76fC/falcon-Heavy.png"  /> */}
        </div>
    )
}
const ProductsWrapper = styled.div`
padding:2rem;
display:flex;
flex-flow:row wrap;
justify-content: space-evenly;
`

const FilterSection = styled.div`
padding:0.5rem;
`
const FilterButton = styled.button`
width:18rem;
height:2rem;
margin:1rem;
color:black;
font-size: 1.5rem;
border-radius: 0.5rem;
background-color:rgb(197, 136, 194);
@media (max-width:480px){
    width:60%;
    margin-left:20%;
}
`
const FilteringDiv = styled.div`
display:none;
width:25rem;
height:100%;

background-color: pink;
padding:1rem;

${({ isFiltering }) =>
        isFiltering && css`
position: fixed;
top:0;
left:0;
z-index:10;
display:flex;
justify-content: space-around;
flex-flow:column nowrap;
@media (max-width:480px){
    width:100%
}

`}
`
const FilterInstanceWrapper = styled.div`
width:70%;
margin-left:15%;
padding:1rem;
border-radius:0.5rem;
border:2px solid grey;
background-color: white;
margin-bottom:1rem;
`
const FilterInstanceTitle = styled.div`
font-size:1.25rem;
text-align:center;
`
const FilterInstanceBody = styled.div`
padding:1rem;
display:flex;
flex-flow:column nowrap;
justify-content: space-evenly;
`
const StyledButton = styled.button`
font-size:1.5rem;
font-weight: 300;
text-align:center;
color:white;
`
const ButtonWrapper = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content: space-evenly;
`


export default OnePiece
