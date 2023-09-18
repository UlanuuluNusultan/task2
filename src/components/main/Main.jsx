// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { ExpenceContext } from '../../store';
// const Main = () => {
//   const { formData, inlainSubmit, handleInputChange, inlainHeader, form, addNewData } = useContext(ExpenceContext)

  // const initialState = editingItem ? {
  //   date: editingItem.date,
  //   title: editingItem.title,
  //   price: editingItem.price,
  // } : {
  //   date: '',
  //   title: '',
  //   price: '',
  // }

  // const formReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'SET_FIELD':
  //       return { ...state, [action.fieldName]: action.fieldValue };
  //     case 'RESET_FORM':
  //       return initialState;
  //     default:
  //       return state;
  //   }
  // };

  // const [formState, dispatch] = useReducer(formReducer, initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   dispatch({ type: 'SET_FIELD', fieldName: name, fieldValue: value });
  // };

  // const submit = () => {
  //   addNewExpen({ ...formState });
  //   dispatch({ type: 'RESET_FORM' });
  // };

  // const formEntries = Object.values(formState).some((value) => !value);






  // return (
  //   <MainStyled>
  //     <div className="mama">
  //       <div className="papa">
  //         {formData.isOpen ? <form className='forms' onSubmit={inlainSubmit}>
  //           <div className='input-group'>
  //             <label htmlFor="one" >Заголовок</label>
  //             <input name="title" type="text" id="one" value={formData.title} onChange={handleInputChange} />
  //           </div>

  //           <div className='input-group'>
  //             <label htmlFor="two">Количество</label>
  //             <input name="number" type="number" id="two" value={formData.number} onChange={handleInputChange} />
  //           </div>

  //           <div className='input-group'>
  //             <label className="forms-outline2" htmlFor="three">Датировать</label>
  //             <input name="data" type="date" id="three" value={formData.data} onChange={handleInputChange} />
  //           </div>

  //           <div className='button'>
  //             <button className='forms-btn1' onClick={inlainHeader}>Отмена</button>
  //             <button className='forms-btn1' type="submit" >Добавить расходы</button>
  //           </div>
  //         </form> : 
  //         <div className='item'>
  //           <button onClick={form}>Добавить новый расход</button>
  //         </div>}
  //       </div>
  //     </div>









      {/* <div className="mama">
        <div className="papa">
          <div className="input-group">
            <label htmlFor="заголовок">Заголовок</label>
            <input name="title" value={formState.title} onChange={handleChange} type="text" id="заголовок" />
          </div>
          <div className="input-group">
            <label htmlFor="количество">Количество</label>
            <input name="price" value={formState.price} onChange={handleChange} type="text" id="количество" />
          </div>
          <div className="input-group">
            <label htmlFor="датировать">Датировать</label>
            <input name="date" value={formState.date} onChange={handleChange} type="date" id="датировать" />
          </div>
        </div>
        <div className="button">
          <button onClick={onClose}>Отмена</button>
          <button disabled={formEntries} style={{ background: formEntries ? 'red' : 'blue' }} onClick={submit}>
           {editingItem ? 'Сохранить' : ' Добавить расходы'}
          </button>
        </div>
      </div> */}
    // </MainStyled>
//   );
// };

// export default Main;
// const MainStyled = styled.div`
//   .mama {
//           width: 781px;
//           height: 287px;
//           background-color: #AD9BE9;
//           border-radius: 12px;
//           margin-top: 20px;
//         }
//         .papa {
//           display: flex;
//           flex-wrap: wrap;
//         }
  
//         .input-group {
//           display: flex;
//           flex-direction: column;
//           margin: 20px;
//         }
  
//         label {
//           margin-bottom: 5px;
//         }
  
//         input {
//           width: 340px;
//           height: 39px;
//           border-radius: 8px;
//         }
//         .button {
//           display: flex;
//           justify-content: end;
//         }
//         .button button {
//           width: 97px;
//           height: 51px;
//           color: white;
//           background-color: #4A026B;
//           border-radius: 12px;
//         }
//         .btn1 {
//           width: 186px;
//           height: 51px;
//           margin-left: 20px;
//         }
// `;
import React, {useContext} from 'react';
import styled from "styled-components";
import {ExpenceContext} from "../../store";

function AddHeader() {
const {formData,inlainSubmit , handleInputChange, inlainHeader, form, addNewData } = useContext(ExpenceContext)
    return (
        <div>

        <HeaderStyle>
            {formData.isOpen ? <form className='forms' onSubmit={inlainSubmit}>
                <div className='forms-outline'>
                    <label htmlFor="one" >Заголовок</label>
                    <input name="title" type="text" id="one" value={formData.title} onChange={handleInputChange}/>
                </div>

                <div className='forms-outline'>
                    <label htmlFor="two">Количество</label>
                    <input name="number" type="number" id="two" value={formData.number} onChange={handleInputChange}/>
                </div>

                <div className='forms-outline'>
                    <label className="forms-outline2" htmlFor="three">Датировать</label>
                    <input name="data" type="date" id="three" value={formData.data} onChange={handleInputChange}/>
                </div>

                <div className='forms-btn'>
                    <button className='forms-btn1' onClick={inlainHeader}>Отмена</button>
                    <button className='forms-btn1' type="submit" >Добавить расходы</button>
                </div>
            </form> :   <div className='item'>
                <button onClick={form}>Добавить новый расход</button>
            </div>}
        </HeaderStyle>
        </div>
    );
}

export default AddHeader;


const HeaderStyle = styled.div`
  .item {
    width: 780px;
    height: 91px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #AD9BE9;
    margin:20px 0;
  }

  .item button {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    padding: 16px 18px;
    width: 228px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #4A026B;
    border: none;
    cursor: pointer;
    margin: 20px 276px;
  }

  .item button:hover {
    background: #600A87;
  }

  .item button:active {
    background: #520B73;
  }

  .forms {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 700px;
    height: 270px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #AD9BE9;
    padding: 55px 40px;
    margin: 50px 0;
  }

  .forms-btn  {
    margin-top: -28px;
    margin-left: 300px;
  }

  .forms label {
    color: #000;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    top: -25px;
  }

  .forms input {
    width: 340px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    outline: none;
    border: none;
    color: #4A026B;
    font-size: 15px;
    caret-color: red;
    position: relative;
    top: -25px;
    
  }

  .forms input:active {
    border: 1px solid #3F3F3F;
  }

  .forms-outline {
    display: flex;
    flex-direction: column;
  }
  
  .forms-outline2 {
    margin-top: 30px;
  }
  
  .forms-btn {
    margin-top: 10px;
    margin-left: 30px;
  }

  .forms-btn1 {
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    padding: 18px 15px;
    border-radius: 10px;
    background: #4A026B;
    border: none;
    cursor: pointer;
    margin: -20px 10px;
  }

  
  .forms-btn1:hover {
    background: #600A87;
  }

  .forms-btn1:active {
    background: #520B73;
  }

  .forms-btn button{
    position: relative;
    top: 46px;
    margin-top: 30px;
  }
`