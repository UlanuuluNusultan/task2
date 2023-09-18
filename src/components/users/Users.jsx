import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Users = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response.data);

            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        }
        fetchData();
    }, []);


    return (
        <UserStyle>
            <h1>Пользователи</h1>
            <ul>
                {data.map(user => {
                    return (<div className='user-card' key={user.id}>
                        <h2> {user.name}</h2>

                        <p> Номер:{user.phone}</p>
                        <li >Город:{user.address.city}</li>
                    </div>
                    )
                })}
            </ul>
        </UserStyle>
    )
}

export default Users
const UserStyle = styled.div`
h1{
    text-align:center;
}
ul{
    display: flex;
    flex-wrap: wrap;
    background: #1F1F1F;
    border-radius: 12px;
}
li{
    list-style: none;
    color:#000000;
}
.user-card{
    width: 230px;
    height: 170px;
    background: #AD9BE9;
    border-radius: 12px;
    padding: 20px;
    margin:10px 10px 0 10px ;

}
h1{
    color:#FFFFFF;
    margin:20px 0
}
h2{
    color:#000000;
}
p{
    color:#000000;
}
`