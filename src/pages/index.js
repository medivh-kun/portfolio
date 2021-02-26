import React from "react"
import "../styles/global.css"
import displayPic from "../images/display pic.jpg"
import skyScrapper from "../images/skyscrapper.jpg"
import scrollTo from 'gatsby-plugin-smoothscroll'
import Footer from '../components/footer'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.ico"

export default function Home() {
  return <>
  <Helmet>
    <meta charSet="utf-8"/>
    <title>Shawn | Home</title>
    <link rel="icon" href={favicon} />
  </Helmet>
  <section class="flex text-center sm:text-left items-center text-4xl xl:text-5xl font-semibold">
    <div class="px-8">
      <h1 class="w-full mb-8">Hi, I am
        <span>&nbsp;SHAWN</span>
        <br/>I'm not the developer that everyone needs but the dev that everyone deserve
      </h1>
      <button class="hover:bg-purple-600 active:bg-blue-700 p-1 text-xl rounded-lg bg-blue-500 text-white focus:outline-none" onClick={() => scrollTo('#about')}>Know more</button>
    </div>
    
  </section>
  <section class="justify-center flex text-center items-center bg-gradient-to-r from-purple-500 to-blue-900 text-white" id="about">
    <div class="max-w-4xl w-full">
      <h1 class="header">ABOUT ME</h1>
      <div class="flex flex-row flex-wrap">
        <div class="w-full md:w-1/2 mb-8">
            <img class="h-200 w-350 m-auto" src={displayPic} alt="display pic"></img>
        </div>
        <div class="flex justify-center w-full md:w-1/2 items-center text-center md:text-left font-medium">
          I am a developer<br/>You can hire me for projects<br/>I have programming skills<br/>
        </div>
      </div>
    </div>
  </section>

  <section class="grid items-center justify-center">
    <div class="w-full max-w-4xl max-h-96">
      <h1 class="header text-black text-center">PROJECTS</h1>
      <div class="h-50vh grid grid-cols-3 grid-rows-layout">
        <div class="lg:col-span-1 mx-4 col-span-3 row-span-1">
          <h1 class="text-xl font-bold mb-2">LIVE CHANGING PROJECTS</h1>
          <h1>COMING SOON</h1>
          <h1>DONT WORRY ITS VERY SOON, check out this awesome sky scrapper meanwhile</h1>
        </div>
        <div class="lg:col-span-2 col-span-3 row-span-1">
          <img src={skyScrapper} alt="skyscrapper" />
        </div>
      </div>
    </div>
  </section>

  <section class="p-0">
    <div class="text-white grid justify-center h-80vh px-4 items-center bg-gradient-to-r from-blue-900 to-purple-500 text-center">
      <div class="h-25vh items-center">
        <div class="grid header justify-center">
          CONTACT
        </div>
        <div class="text-lg mb-8">
          You would like to work with me? Awesome!
        </div>
        <Link to="/contact"><button class="font-semibold text-xl border-white rounded border-2 p-2 hover:bg-white hover:text-purple-900 focus:outline-none">Let's Talk</button></Link>
      </div>
      
    </div>
    <Footer/>

  </section>

  </>
}
