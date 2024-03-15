import Nav from '../components/Nav'
import Header from '../components/Header'
import SolicitationsTable from '../components/SolicitationsTable'

function SolicitationsPage() {
  return (
      <div className='w-full h-full flex flex-wrap bg-slate-900'>
        <Header />
        <div className='flex'>
          <Nav />
          <SolicitationsTable />
        </div>
      </div>
  )
}

export default SolicitationsPage
