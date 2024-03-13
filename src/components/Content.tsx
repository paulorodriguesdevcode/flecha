function Content() {
  return (
    <div>
      <h3 className="text-gray-200 text-2xl mt-10">Solicitações realizadas</h3>
      <table className="bg-slate-900 border border-slate-800 mt-10 h-52">
        <thead>
          <tr className="text-gray-400 p-10">
            <th>Solicitação</th>
            <th>Público alvo</th>
            <th>Respostas</th>
            <th>Pendente</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-200 text-center hover:bg-slate-700 hover:cursor-pointer">
            <td className="">Arregimentação Arena</td>
            <td className="">12</td>
            <td className="">4</td>
            <td className="">8</td>
          </tr>
          <tr className="text-gray-200 text-center hover:bg-slate-700 hover:cursor-pointer">
            <td className="">Arregimentação Domingo</td>
            <td className="">12</td>
            <td className="">4</td>
            <td className="">8</td>
          </tr>
          <tr className="text-gray-200 text-center hover:bg-slate-700 hover:cursor-pointer">
            <td className="">Arregimentação Terça</td>
            <td className="">12</td>
            <td className="">4</td>
            <td className="">8</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Content