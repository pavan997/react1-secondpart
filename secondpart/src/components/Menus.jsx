import React from 'react';

 function Menus({ name, nameStyle })
{
    return <div>
        <button className={nameStyle}>{name}</button>
    </div>
    
} 
export default Menus;