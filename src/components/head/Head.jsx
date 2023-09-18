// import React, { useState } from "react";
// import Main from "../main/Main";
// import styled from "styled-components";
// import Header from "../header/Header";
// import '../../App.css'
// import Users from "../users/Users";


// const Head = () => {
//   const [openMain, setOpenMain] = useState(false);
//   const [expens, setExpens] = useState([]);
//   const [editingItem, setEditingItem] = useState(null);

//   const editItem = (item) => {
//     setEditingItem(item);
//     setOpenMain(true);
//   };

//   const main = () => {
//     setOpenMain(!openMain);
//     setEditingItem(null);
//   };

//   const addNewExpen = (data) => {
//     if (editingItem) {
//       const updatedExpens = expens.map((item) =>
//         item.id === editingItem.id ? { ...data, id: item.id } : item
//       );
//       setExpens(updatedExpens);
//     } else {
//       setExpens([...expens, { ...data, id: Math.random() }]);
//     }
//     setOpenMain(false);
//   };

//   const closeMain = () => {
//     setOpenMain(false);
//     setEditingItem(null);
//   };

//   const handleDelete = (id) => {
//     const updatedExpens = expens.filter((item) => item.id !== id);
//     setExpens(updatedExpens);
//   };
//   return (
//     <HeadStyle>
//       <div className="card">
//         {openMain ? (
//           <Main onClose={closeMain} addNewExpen={addNewExpen} editingItem={editingItem} />
//         ) : (
//           <div className="cap">
//             <button onClick={main}>Добавить новый расход</button>
//           </div>
//         )}
//         <div className='card2'>
//           <div className='car'>
//             <h3>Фильтр по году</h3>
//             <select>
//               <option>2023</option>
//               <option>2022</option>
//               <option>2021</option>
//               <option>2020</option>
//               <option>2019</option>
//             </select>
//           </div>
//           <div className='card3'>
//             {expens.map((item) => {
//               return <div className='list'>
//                 <div className='div' key={item.id}>
//                   <div className='qwerty'>
//                     <div className='nn'>
//                       <h3>{item.date}</h3>
//                     </div>
//                   </div>
//                 </div>
//                      <div className='mm'>
//                   <h3>{item.title}</h3>
//                 </div>
//                 <div className="v">
//                   <h4>$      {item.price}</h4>
//                 </div>
//                 <div className="m">
//                   <button onClick={() => handleDelete(item.id)}>dell</button>
//                 </div>
//                 <div className="x">
//                   <button onClick={() => editItem(item)}>edit</button>
//                 </div>
//                 </div>
//             })}
//           </div>
//         </div>
//       </div>
//     </HeadStyle>
//   );
// };

// export default Head;
// const HeadStyle = styled.div`  
//           .cap {
//               width: 780px;
//               height: 91px;
//               background-color: #AD9BE9;
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               border-radius: 12px;
//               margin-top: 20px;
//           }
  
//           .cap button {
//               width: 228px;
//               height: 51px;
//               background-color: #4A026B;
//               color: white;
//               border-radius: 10px;
//               border: transparent;
//           }
//           .card2 {
//               width: 780px;
//               height: 100%;
//               background-color: #1F1F1F;
//               border-radius: 12px;
//               margin-top: 30px;
//             }
            
//             .card h3 {
//               color: white;
//             }
            
//             .car {
//               display: flex;
//               justify-content: space-between;
//             }
            
//             .car select {
//               width: 124px;
//               height: 43px;
//               border-radius: 6px;
//               margin: 30px 10px 10px 10px;
//               text-align: center;
//             }
            
//             .car h3 {
//               margin: 42px;
//               padding-inline: 1px;
//             }
            
//   .list {
//       border-radius: 10px;
//       border: 1px solid #4B4B4B;
//       background-color: #4B4B4B;
//       margin:0 10px ;
//       margin-top: 20px;
//       border-radius: 12px;
//       display:flex;
//       justify-content: space-between;
      
//     }
    
//     .div {
//       width: 82.11px;
//       height: 80px;
//       border: 1px solid white;
//       text-align: center;
//       background-color: #2A2A2A;
//       border-radius: 12px;
//       margin: 20px;
    
//     }
//     .mm {
//       margin-top: 30px;
//        }
//     .v {
//       color: white;
//       width: 80px;
//       height: 44px;
//       background-color: #4A026B;
//       text-align: center;
//       border: 1px solid #FFFFFF;
//       border-radius: 10px;
//       margin-top: 35px;
//       display: flex;
//       justify-content:center;
//       align-items: center;
//       margin-left: 300px;

//     }
//   .m{
//     margin-top: 35px
//   }
//     .m button{
//       color: white;
//       width: 50px;
//       height: 44px;
//       background-color: #4A026B;
//       text-align: center;
//       border: 1px solid #FFFFFF;
//       border-radius: 10px;
//     } 
//     .x{
//       margin-top: 35px
//     }
//     .x button{
//       color: white;
//       width: 50px;
//       height: 44px;
//       background-color: #4A026B;
//       text-align: center;
//       border: 1px solid #FFFFFF;
//       border-radius: 10px;
  
//     } 
// `;
import React, {useContext, useState} from "react";
import styled from "styled-components";
import {ExpenceContext} from "../../store";

function Items() {
    const {data, editHandler} = useContext(ExpenceContext)
    const [hiddenBlocks, setHiddenBlocks] = useState([]);
    const [isHidden, setIsHidden] = useState(false)
    const handleDeleteClicks = () => {
        setIsHidden(true)
    }

    const handleDeleteClick = (itemId) => {
        setHiddenBlocks([...hiddenBlocks, itemId]);
    };

    return (
        <ItemsStyle>
            <div>
                {!isHidden && (
                    <div className="card">
                        <div className="data">2023 01 11</div>
                        <p>Alpen Gold</p>
                        <span className="card-btn">
             <button className="forms-btn1" type="button"
                     onClick={handleDeleteClicks}><ion-icon name="trash-outline"></ion-icon></button>
                             <button className="forms-btn1"><ion-icon name="sync-outline"></ion-icon> </button>
           </span>
                        <div className="price">$30</div>
                    </div>
                )}
            </div>

            <div>
                {data.map((item) => {
                    if (!hiddenBlocks.includes(item.id)) {
                        return (
                            <div className="card" key={item.id}>
                                <div className="data">{item.data}</div>
                                <p> {item.title}</p>
                                <span className="card-btn">
                         <button className="forms-btn1"
                                 type="button"
                                 onClick={() => handleDeleteClick(item.id)}><ion-icon name="trash-outline"></ion-icon></button>
                                     <button onClick={() => editHandler(item)} className="forms-btn1"><ion-icon name="sync-outline"></ion-icon> </button>
                        </span>
                                <div className="price">${item.number}</div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </ItemsStyle>
    );
}

export default Items;


const ItemsStyle = styled.div`
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 748px;
    height: 104px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #4b4b4b;
    padding: 12px 16px;
    margin: 16px 0;
  }

  .data {
    width: 82px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #fff;
    background: #2a2a2a;
    color: #fff;
    font-size: 20px;
    text-align: center;
    padding: 8px 23px;
    font-weight: 700;
  }

  .card p {
    position: relative;
    z-index: 99;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin: -40px 460px 0 0;
  }

  .price {
    position: relative;
    display: inline-flex;
    padding: 10px 18px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    background: #40005d;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
  }

  .card-btn {
    display: flex;
    margin-left: -200px;
  }

  .forms-btn1 {
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 10px;
    border-radius: 10px;
    background: #4A026B;
    border: none;
    cursor: pointer;
    margin: 0 10px;
  }

  .forms-btn1:hover {
    background: #600A87;
  }

  .forms-btn1:active {
    background: #520B73;
  }
`;