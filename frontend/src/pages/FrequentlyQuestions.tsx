import React from 'react'
import Header from '../components/Header'
import CardQuestion from '../components/CardQuestion'

function FrequentlyQuestions() {
  return (
    <div className="bg-gradient-to-d ">
    <Header/>

      <section className="bg-yellow text-yellow flex justify-between items-center p-10 space-x-72 mb-[-10rem]">
      <div className="space-y-4 w-[70vw] lg:mt-[-40rem] ">
        <h1 className="hero-subtitle">Frequently Asked Questions</h1>

        
      </div>
      <div className="relative flex items-center h-screen justify-center">
        <CardQuestion/> 

       
      </div>
    </section>
    </div>
  )
}

export default FrequentlyQuestions
