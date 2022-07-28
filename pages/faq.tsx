import React from 'react'
import Particle from '../components/Particle'
import Navbar from '../components/Navbar'

const Faq = () => {
  return (
    <>
    <Navbar/>
    <div className= "main-container">
      <div className="questions">
        <h2 className= "questions__title">Q: Why did you choose this tech stack?</h2>
        <p className= "questions__answer">A: I have always wanted to build out a CSS heavy project to consume an API endpoint. I was also learning Typescript 
        and NextJS so I thought this would be the perfect opportunity to showcase all of that.
        </p>
      </div>
      <div className="questions">
        <h2 className= "questions__title">Q: Why GamesTech?</h2>
        <p className= "questions__answer">A: Aside from programming, I am a pretty heavy gamer and also am very interested in all the new technologies that are coming out.
        So I thought, why not just build a website that will gives me the latest news of both? The different categories are also a bonus, if you go to the tech page you will also find news about
        about FAANG as well (FAANG pls hire me).
        </p>
      </div>
      <div className="questions">
        <h2 className= "questions__title">Q: Is SASS worth it to learn?</h2>
        <p className= "questions__answer">A: Yes my friend. Yes it is. It &apos;s bascially just plain CSS with a little bit of add-ons. It&apos;s got nesting, you can @extend classes, you can make @mixins(re-usable CSS functions) and then create custom
        parameters for them, it honestly just makes it convenient and give you more options. 
        </p>
      </div>
      <div className="questions">
        <h2 className= "questions__title">Q: How do I learn Typescript?</h2>
        <p className= "questions__answer">A: I would suggest to watch a youtube video first to get the gist of what Typescript is about. Then read more
        about the documentation on the Typescript official website (their handbok). Once you have done those, try to implement onto an existing projects. Function returns a number, props is a string,
        my News api object has contains an array of articles []. If you get stuck look at the error online and take the time to figure out why it &apos;s throwing you that error message.
        </p>
      </div>
      <div className="questions">
        <h2 className= "questions__title">Q: What is NextJS?</h2>
        <p className= "questions__answer">A: NextJS is a framework built on top of ReactJS. It gives tons of utilities out of the pacakage; dynamic routing, typescript support out of the package, different rendering methods (CSR, SSR, SSG, ISR), as well as fast refresh and dynamic routing, codesplitting and bundling(one page having error wont break the entire application).
        In my opinion it is becoming an essential to use NextJS just because it makes everything so convenient as well as having so many extra features. 
        </p>
      </div>
      <div className="questions">
        <h2 className= "questions__title">Q: Whats the difference between all these different rendering methods? (CSR, SSR, SSG, ISR)</h2>
        <p className= "questions__answer">A: The biggest difference that lies in all of them is if the method is pre-rendered or not. If there is no pre-rendering, in the inital load there is nothing rendered because the server sends back an empty HTML with bundled JS file, up until the browser finish loading that JS bundle that the server sent out,
        on the client side it will remain to be a blank screen. Where as if there IS pre-rednering, the server builds out the HTML page already and sends it back to the client, so at inital load of the request, the client would still be able to see the HTML before it becomes fully hydrated(interactive). SSG is just static site generation, if you dont have any data that needs to be updated,
        this is a great way to optimize for best performance as everything is already generated at built time already, so the server will keep serving the same static files that are built. ISR is SSG but with the option that you would want to set timers to build out static files again so your data are not stale. 
        </p>
      </div>
      <Particle/>
    </div>
    </>
  )
}

export default Faq