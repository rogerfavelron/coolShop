import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styled, { css } from 'styled-components'
const OnePiece = () => {
    const [totalData, setTotalData] = useState([]);
    const [crew, setCrew] = useState('straw-hat-pirates');
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

    const handleCheckboxes = (e) =>{
        const id=e.target.id;
        const checked = e.target.checked;
        console.log("name: ", id, "checked ", checked);
        setCrew(id)
    }

    return (
        <div>
            <FilterSection>
                <FilterButton onClick={changeFiltering}>Filter</FilterButton>
            </FilterSection>
            {totalData.map((product,index)=>
            <ProductCard key={index} name={product.name} price={product.price} imageUrl={product.image} />
            )}
            <FilteringDiv isFiltering={filtering}>
                <FilterInstanceWrapper>
                    <FilterInstanceTitle>Sort by price</FilterInstanceTitle>
                    <FilterInstanceBody>
                        <div style={{padding:"0.5rem"}}>
                            <input type="radio" id="lowToHigh" name="radio" />
                            <label for="lowToHigh"> Low to high</label> <br />
                        </div>
                        <div style={{padding:"0.5rem"}}>
                            <input type="radio" id="highToLow" name="radio" />
                            <label for="highToLow"> High to low</label> <br />
                        </div>

                    </FilterInstanceBody>
                </FilterInstanceWrapper>
                <FilterInstanceWrapper>
                    <FilterInstanceTitle>Crew</FilterInstanceTitle>
                    <FilterInstanceBody>
                        <div style={{padding:"0.5rem"}}>
                            <input onChange={handleCheckboxes} type="radio" id="straw-hat-pirates" name="pirates"  />
                            <label for="straw-hat-pirates"> Straw Hat Pirates</label> <br />
                        </div>
                        <div style={{padding:"0.5rem"}}>
                            <input  onChange={handleCheckboxes}  type="radio" id="whitebeard-pirates" name="pirates" />
                            <label for="whitebeard-pirates"> Whitebeard Pirates</label> <br />
                        </div>
                        <div style={{padding:"0.5rem"}}>
                            <input  onChange={handleCheckboxes}  type="radio" id="roger-pirates" name="pirates" />
                            <label for="roger-pirates"> Roger Pirates</label> <br />
                        </div>
                        <div style={{padding:"0.5rem"}}>
                            <input  onChange={handleCheckboxes}  type="radio" id="big-mom-pirates" name="pirates" />
                            <label for="big-mom-pirates"> Big Mom Pirates</label> <br />
                        </div>
                        <div style={{padding:"0.5rem"}}>
                            <input  onChange={handleCheckboxes}  type="radio" id="red-hair-pirates" name="pirates" />
                            <label for="red-hair-pirates"> Red Hair Pirates</label> <br />
                        </div>
                        <div style={{padding:"0.5rem"}}>
                            <input  onChange={handleCheckboxes}  type="radio" id="beast-pirates" name="pirates" />
                            <label for="beast-pirates"> Beast Pirates</label> <br />
                        </div>

                    </FilterInstanceBody>
                </FilterInstanceWrapper>

            </FilteringDiv>

            {/*
            <ProductCard name="Imac" price={1299} imageUrl = "https://i.ibb.co/ncS76fC/falcon-Heavy.png"  /> */}
        </div>
    )
}

const FilterSection = styled.div`
border:2px solid black;
`
const FilterButton = styled.button`
width:30%;
height:2rem;
color:black;
background-color: aqua;
border:2px solid pink;
`
const FilteringDiv = styled.div`
display:none;
position: absolute;
width:100%;
height:100vh;
top:0;
left:0;
z-index:10;
background-color: pink;
padding:1rem;

${({ isFiltering }) =>
        isFiltering && css`
display:block;

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
border:2px solid pink;
padding:1rem;
display:flex;
flex-flow:column nowrap;
justify-content: space-evenly;
`


export default OnePiece
