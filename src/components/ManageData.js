import React, { useState } from 'react';


const ManageData = () => {
    let someData = 10; 

    console.log(someData);

    const [data, setData] = useState(15);

  return (
    <div>
        <div>
            <div>Valor: {someData}</div>
            <button onClick={() => someData = 15}>Mudar Variável</button>
        </div>
        <div>
            <div>Valor: {data}</div>
            <button onClick={() => setData(30)}>Mudar Estado</button>
        </div>
    </div>
  )
}

export default ManageData