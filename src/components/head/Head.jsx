import React, { useState } from "react";
import Main from "../main/Main";
import styled from "styled-components";


const Head = () => {
  const [openMain, setOpenMain] = useState(false);
  const [expens, setExpens] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const editItem = (item) => {
    setEditingItem(item);
    setOpenMain(true);
  };

  const main = () => {
    setOpenMain(!openMain);
    setEditingItem(null);
  };

  const addNewExpen = (data) => {
    if (editingItem) {
      const updatedExpens = expens.map((item) =>
        item.id === editingItem.id ? { ...data, id: item.id } : item
      );
      setExpens(updatedExpens);
    } else {
      setExpens([...expens, { ...data, id: Math.random() }]);
    }
    setOpenMain(false);
  };

  const closeMain = () => {
    setOpenMain(false);
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    const updatedExpens = expens.filter((item) => item.id !== id);
    setExpens(updatedExpens);
  };

  return (
    <HeadStyle>
      <div className="card">
        {openMain ? (
          <Main onClose={closeMain} addNewExpen={addNewExpen} editingItem={editingItem} />
        ) : (
          <div className="cap">
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
          <div className='list'>
                <div className='div'>
                  <div className='qwerty'>
                    <div className='nn'>
                      <h3>2003-09-12</h3>
                    </div>
                  </div>
                </div>
                <div className='mm'>
                  <h3>Бумага</h3>
                </div>
                <div className="v">
                  <h4>$90</h4>
                </div>
                <div className="m">
                  <button>dell</button>
                </div>
                <div className="x">
                  <button>edit</button>
                </div>

              </div>
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
                <div className="m">
                  <button onClick={() => handleDelete(item.id)}>dell</button>
                </div>
                <div className="x">
                  <button onClick={() => editItem(item)}>edit</button>
                </div>
                </div>
            
            })}

          </div>
        </div>
      </div>
    </HeadStyle>
  );
};

export default Head;
const HeadStyle = styled.div`
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
      margin:0 10px ;
      margin-top: 20px;
      border-radius: 12px;
      display:flex;
      justify-content: space-between;
      
    }
    
    .div {
      width: 82.11px;
      height: 80px;
      border: 1px solid white;
      text-align: center;
      background-color: #2A2A2A;
      border-radius: 12px;
      margin: 20px;
    
    }
    .mm {
      margin-top: 30px;
       }
    .v {
      color: white;
      width: 80px;
      height: 44px;
      background-color: #4A026B;
      text-align: center;
      border: 1px solid #FFFFFF;
      border-radius: 10px;
      margin-top: 35px;
      display: flex;
      justify-content:center;
      align-items: center;
      margin-left: 300px;

    }
  .m{
    margin-top: 35px
  }
    .m button{
      color: white;
      width: 50px;
      height: 44px;
      background-color: #4A026B;
      text-align: center;
      border: 1px solid #FFFFFF;
      border-radius: 10px;
    } 
    .x{
      margin-top: 35px
    }
    .x button{
      color: white;
      width: 50px;
      height: 44px;
      background-color: #4A026B;
      text-align: center;
      border: 1px solid #FFFFFF;
      border-radius: 10px;
  
    } 
`;
