import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.scss';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section_margin' id='whtp3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={'What is GPT3?'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'} />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'} />
        <Feature title={'Knowledgebase'} text={'Own apartments boisterous. At jointure ladyship an insisted so humanity he.'} />
        < Feature title={'Education'} text={'Connection has put boisterous. At jointure ladyship an insisted so humanity he.'} />
      </div>
    </div>
  )
}

export default WhatGPT3