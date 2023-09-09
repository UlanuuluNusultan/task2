import React, { useReducer } from 'react';
import styled from 'styled-components';

const MainStyled = styled.div`
  .mama {
        width: 780px;
        height: 287px;
        background-color: #AD9BE9;
        border-radius: 12px;
        margin-top: 100px;
      }
      .papa {
        display: flex;
        flex-wrap: wrap;
      }
    
      .input-group {
        display: flex;
        flex-direction: column;
        margin: 20px;
      }
    
      label {
        margin-bottom: 5px;
      }
    
      input {
        width: 340px;
        height: 39px;
        border-radius: 8px;
      }
      .button {
        display: flex;
        justify-content: end;
      }
      .button button {
        width: 97px;
        height: 51px;
        color: white;
        background-color: #4A026B;
        border-radius: 12px;
      }
      .btn1 {
        width: 186px;
        height: 51px;
        margin-left: 20px;
      }
`;

// Определение начального состояния и редуктора
const initialState = {
  date: '',
  title: '',
  price: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.fieldName]: action.fieldValue };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const Main = ({ onClose, addNewExpen }) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', fieldName: name, fieldValue: value });
  };

  const submit = () => {
    const data = {
      title: formState.title,
      price: formState.price,
      date: formState.date,
      id: Math.random(),
    };
    addNewExpen(data);
    dispatch({ type: 'RESET_FORM' });
  };

  const formEntries = Object.values(formState).some((value) => !value);

  return (
    <MainStyled>
      <div className="mama">
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
            Добавить расходы
          </button>
        </div>
      </div>
    </MainStyled>
  );
};

export default Main;
