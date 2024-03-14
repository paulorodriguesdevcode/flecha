import Nav from '../components/Nav'
import Header from '../components/Header'
import Content from '../components/Content'

function Home() {
  return (
    <div className='w-full h-full flex flex-wrap bg-slate-900'>
      <Header />
      <div className='flex'>
        <Nav />
        <Content />
      </div>
    </div>
  )
}

export default Home
