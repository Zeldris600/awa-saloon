import React from 'react'
import Icon from './components/icon'
import {BsTelephoneForward} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import logo from './Asset/saloon.png'
import './index.css'
const Header = () => {
  return (
    <section className='header'>
        <div><img src={logo} alt="" height='100' width='100'/></div>
        <div className='header-icon'>
            <Icon name='ava@gmail.com' icon={<AiOutlineMail/>}/>
            <Icon  name='675383104' icon={<BsTelephoneForward/>}/>
        </div>
    </section>
  )
}

export default Header