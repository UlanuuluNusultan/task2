import React, { useState } from "react";
import Main from "../main/Main";
import styled from "styled-components";

const Head = () => {
  const HeadStyle = styled.div`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #3F3F3F;
        }

        .card {
            width: 1000px;
            margin: 0 auto;
        }

        .cap {
            width: 780px;
            height: 91px;
            background-color: #AD9BE9;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            margin-top: 100px;
        }

        .cap button {
            width: 228px;
            height: 51px;
            background-color: #4A026B;
            color: white;
            border-radius: 10px;
            border: transparent;
        }
        .card2 {
            width: 780px;
            height: 100%;
            background-color: #1F1F1F;
            border-radius: 12px;
            margin-top: 30px;
          }
          
          .card h3 {
            color: white;
          }
          
          .car {
            display: flex;
            justify-content: space-between;
          }
          
          .car select {
            width: 124px;
            height: 43px;
            border-radius: 6px;
            margin: 30px 10px 10px 10px;
            text-align: center;
          }
          
          .car h3 {
            margin: 42px;
            padding-inline: 1px;
          }
          
.list {
    border-radius: 10px;
    border: 1px solid #4B4B4B;
    background-color: #4B4B4B;
    margin-left: 16px;
    margin-top: 20px;
    border-radius: 12px;
    display:flex;
    justify-content: space-between;
  }
  
  .flex h3 {
    margin-left: 15px;
  }
  
  .div {
    width: 82.11px;
    height: 80px;
    border: 1px solid white;
    text-align: center;
    background-color: #2A2A2A;
    border-radius: 12px;
    flex-direction: column;
    margin: 20px;
  }
  
  .div p {
    margin-top: 5px;
  }
  
  .div h4 {
    color: white;
    margin-top: 5px;
  }
  
  .prise {
    width: 112px;
    height: 44px;
    text-align: center;
    background-color: #40005D;
    color: white;
    padding: 10px 18px 10px 18px;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
  }
  
  .qwerty {
    display: flex;
    margin: 10px;
    margin-left: 18px;
  }
  
  .mm {
  
    margin-top: 45px;
    margin-right: 450px;
     }
  .v {
    color: white;
    width: 112px;
    height: 44px;
    background-color: #4A026B;
    text-align: center;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    border: transparent;
    padding: 12px;
    margin: 36px;
    margin-right: 20px;
   
  }

 
    `;

  const [openMain, setOpenMain] = useState(false)
  const [expens, setExpens] = useState([

  ])

  const main = () => {
    setOpenMain(!openMain);
  }

  const addNewExpen = (data) => {
    setExpens([...expens, data])
  }
  const closeMain = (e) => {
    setOpenMain(false);
  }


  return (
    <HeadStyle>
      <div className='card'>
        {openMain ? (<Main onClose={closeMain} addNewExpen={addNewExpen}/>) : (
          <div className='cap'>
            <button onClick={main}>Добавить новый расход</button>
          </div>
        )}
        <div className='card2'>
          <div className='car'>
            <h3>Фильтр по году</h3>
            <select>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </select>
          </div>
          <div className='card3'>
            {expens.map((item) => {
              return <div className='list'>
              <div className='div' key={item.id}>
                <div className='qwerty'>
                  <div className='nn'>
                    <h3>{item.date}</h3>
                  </div>
                </div>
              </div>
              <div className='mm'>
                <h3>{item.title}</h3>
              </div>
              <div className="v">
                  <h4>$      {item.price}</h4>
              </div>
            </div>
            })}
            
          </div>
        </div>
      </div>
    </HeadStyle>
  )
}
export default Head;