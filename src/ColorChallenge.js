import React from 'react';

const ColorChallenge = ({color,setColor,toggle,setToggle}) => {

  return (
    <div className="wrapper">
        <div className="box" style={
            {
                backgroundColor:color,
                color:(toggle ? '#000':'#fff')
            }}>
            <p>{color.length>0 ? color : 'Empty value'}</p>
        </div>
        <label htmlFor="color">Color</label>
        <input type="text"
            id='color'
            placeholder='Add Color Name'
            value={color}
            onChange={(e)=>setColor(e.target.value)}
        />
        <button
            type='button'
            placeholder='toggle Color'
            id='toggle'
            onClick={()=>setToggle(!toggle)}
        >Toggle Colour</button>
      </div>
  );
};

export default ColorChallenge;
