import { useEffect, useState } from "react";

interface IResponseData {
  id: string,
  name: string,
  target: number,
  answers: number,
  pending: number
}

function Solicitations() {
  const [responseData, setResponseData] = useState<IResponseData[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('effect')
    const fetchData = async () => {
      try {
        const response = await fetch('https://rod-tools.onrender.com/solicitations');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setResponseData(data);
        console.log(data)
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return error ? (
    <div className="flex text-center justify-center">
      <p className="text-white text-4xl ">Ocorreu o erro: {JSON.stringify(error)}</p>
    </div>
  ) : (
    <div className="m-10">
      <h3 className="text-gray-200 text-2xl ml-5">Solicitações realizadas</h3>
      <div className="mt-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Solicitação
              </th>
              <th scope="col" className="px-6 py-3">
                Público alvo
              </th>
              <th scope="col" className="px-6 py-3">
                Respostas
              </th>
              <th scope="col" className="px-6 py-3">
                Pendente
              </th>
            </tr>
          </thead>
          <tbody>
            {
              responseData.map(item => (
                <tr key={item.id} className="border-b dark:bg-slate-800 dark:border-gray-700 hover:bg-slate-700 dark:hover:bg-slate-700">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                  </th>
                  <td className="px-6 py-4">
                    {item.target}
                  </td>
                  <td className="px-6 py-4">
                    {item.answers}
                  </td>
                  <td className="px-6 py-4">
                    {item.pending}
                  </td>
                </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Solicitations
