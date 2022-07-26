import Navbar from '../components/Navbar'
import Particle from '../components/Particle'
import Image from 'next/image'

const Readme = () => {

  return (
    <>
      <Navbar />
      <div className="read-container">
        <h1 className="read__title">How is GamesTech built?</h1>
        <div className="demo">
        <Image src="/react.png" alt="Ahlie fam" width={1000} height={500} />
          <h2 className="demo__header">ReactJS</h2>
          <p className="demo__desc">
            React is a javascript library that allows user to build out
            interactive UIs. It&apos;s lightweight, and lets your write
            independent components which allows for better scalabilty and easy
            to work with. Components are re-usable and can fuction by
            themselves, we also have states; which can be accessed from
            top-level component to bottom-level by passing them as props, as
            well as react hooks to interact with those states. With very minimal
            time, you can make a layout for your website and allow everyone can
            work on different components.
          </p>
        </div>
        <div className="demo">
        <Image src="/react.png" alt="Ahlie fam" width={1000} height={500} />
          <h2 className="demo__header">NextJS</h2>
          <p className="demo__desc">
            NextJS is a framework built on top of React. It&apos;s awesome
            because it comes with so many options and utilities straight out of
            the package, unlike React where you would have to manually install
            and configure everything. It&apos;s got file based system routing,
            meaning you can just create a module and it will already be routed
            in your production. Fast refresh; you dont have to keep refreshing
            the page after you make changes. Typescript support so you can just
            have it already setup with the boiler plate ready to go. Code
            splitting/bundling; the entire application won't break in case a
            component doesn't work. And lastly, the most popular thing NextJS
            has been used for. The different rendering methods! It supports SSG,
            CSR, SSR, ISR, and allows user to choose whichever rendering method
            that would best benefit the project.
          </p>
          <div className="demo">
        <Image src="/react.png" alt="Ahlie fam" width={1000} height={500} />
            <h2 className="demo__header">Typescript</h2>
          </div>
          <p className="demo__desc">
            Typescript is a superset of javascript, meaning its still javascript
            code but with extra tooling features. Typescript enforces you to
            predefine types, which is great because it allows us to write more
            cohesive code that is meant to gets rid of unwanted behavior. It's
            great because it allwos you to have extra error checking on types
            and catches error before runtime, making it easier to debug and
            isolate problems before production.
          </p>
        </div>
        <div className="demo">
        <Image src="/react.png" alt="Ahlie fam" width={1000} height={500} />
          <h2 className="demo__header">SASS</h2>
          <p className="demo__desc">
            SASS is a CSS pre-processor, its a program that lets you generate
            CSS from the program's unique syntax. SASS has been extremely
            helpful, it makes CSS much more maitainable by making it modular
            based, it's really easy to write nested selectors inside of writing
            the same className over and over again. It has features like
            varables for consistent theming, as well as custom @mixins! Custom
            CSS parameter functions! They are also reusable too so you can just
            @include them them in the file that you are working with and use it
            throughout the entire project. Here's an example:
          </p>
        </div>
        <div className="demo">
        <Image src="/react.png" alt="Ahlie fam" width={1000} height={500} />
          <h2 className="demo__header">APIS</h2>
          <p className="demo__desc">
            For main API which populated all the articles on this website from
            all the different sources, we have to thank NewsAPI. It's search
            results are accurate, and have many parameters to customize query
            and make results make specifically tailored to user's needs. As for
            the Youtube carousel in the middle, It was made using Youtube Data
            V3 API to fetch all the trailers, and styled with SwiperJS.
          </p>
        <Image src="/react.png" alt="Ahlie fam" width={1000} height={500} />
        <Image src="/react.png" alt="Ahlie fam" width={1000} height={500} />
        </div>
        <Particle />
      </div>
    </>
  );
}

export default Readme