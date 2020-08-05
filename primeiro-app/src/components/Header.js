
import React from 'react';

const TodoList = ({ numTodos }) => (
    < div className='card-header' >
    <h1>Carrinho de compras</h1>
    <h2 className='card-header-title header'>
            Você selecionou  {numTodos} items
    </h2>
    </div >
)

export default TodoList;
