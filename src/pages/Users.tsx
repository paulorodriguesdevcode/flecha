import Nav from '../components/Nav'
import Header from '../components/Header'
import UsersTable from '../components/UsersTable'

function UsersPage() {
  return (
    <div className='w-full h-full flex flex-wrap bg-slate-900'>
      <Header />
      <div className='flex'>
        <Nav />
        <UsersTable />
      </div>
    </div>
  )
}

export default UsersPage
