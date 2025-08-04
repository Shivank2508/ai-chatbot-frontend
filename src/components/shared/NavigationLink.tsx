import React from 'react'
import { Link } from 'react-router-dom';
type Props = {
    to: string;
    bg: string;
    text: string;
    textColor: string;
    onclick: () => Promise<void>
}

const NavigationLink = (props: Props) => {
    return (
        <Link className='rounded p-2 px-4 mx-2' to={props.to} style={{ backgroundColor: props.bg, color: props.textColor }}>
            {props.text}
        </Link>
    )
}

export default NavigationLink