import React from 'react'



const Card = (props) =>
{
    return <div className='column'>
    <img src={props.avatar} alt="staff" className='avatarimage' />
    <h3 className='center'>{props.name}</h3>
    <p className='center'>{props.position}</p>
    </div>
}

export default Card