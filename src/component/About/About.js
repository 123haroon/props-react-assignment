import React from 'react'
import Button from './BUTTON/Button'
import Listitem from '../Listitem/Listitem'
export default function About() {
  return (
    <>
      {false ? (
        <>
          <Button style={{ backgroundColor: 'green' }} tittle="save" />
          <Button style={{ backgroundColor: 'red' }} tittle="submit" />
          <Button tittle="close" />
          <Button tittle="requre" />
        </>) : (
        <>
          <Listitem list={['tilte1', 'tuitle2']} />
          <Listitem list={['tilte1', 'tuitle2']} style={{ backgroundColor: 'red' }} />
        </>)} </>
  )
}
