import Header from "../components/Header"
import CardSection from "../components/CardSection.tsx";

const Login = () => {
  return (
  <div className='bg-black'>
      <Header/>
      <section className="bg-black text-white flex justify-between items-center p-10 space-x-72 mb-[-10rem]">
      <div className="space-y-4 w-[50vw] lg:mt-[-15rem] ">
        <h1 className="hero-title">Frequent Asked Questions</h1>
      </div>
      <div className="relative flex items-center h-screen justify-center"></div>
    </section>
    <CardSection/>
    </div>
  )
}

export default Login

