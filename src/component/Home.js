import Header from "./Header";
import useFetch from './useFetch'
import Project from './Project'
import Criteria from './Criteria'
import Footer from './Footer'
import React, { useState } from 'react';

const Home = () => {

    const { data: comuni } = useFetch('https://raw.githubusercontent.com/dianaberna/db-valutazione-a11y-comuni-italiani/master/db.json')

    const [search, setSearch] = useState('');

    const exportToCsv = () => {
      var json = comuni
      var fields = Object.keys(json[0])
      var replacer = function(key, value) { return value === null ? '' : value } 
      var csv = json.map(function(row){
        return fields.map(function(fieldName){
          return JSON.stringify(row[fieldName], replacer)
        }).join(',')
      })
      csv.unshift(fields.join(','))
      csv = csv.join('\r\n');
      const url = window.URL.createObjectURL(new Blob([csv]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'comuni.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    const handleSearchChange = (e) => {
      setSearch(e.target.value)
    };


    let columns = [
      'Codice Istat',
      'Comune',
      'Provincia',
      'Regione',
      'Abitanti'
    ];
    
    let options = {
      page    : 1,
      display : 10,
      pages   : null,
      total   : null,      
    };

    /* 
      view: 10,
      searchInput: '',
      pages: [],
      offset: 10,
      pagination: {
        total: '',
        lastPage: '',
        perPage: 10,
        currentPage: 1,
        from: 1,
        to: 1 * 10
      },
      currentPage: 1,
      sorted: {
        field: 'name',
        rule: 'asc'
      }, 
    */
    
    if(comuni)
    {
      options.total =  comuni.length
      options.pages = options.total / options.display
    }
    
    console.log(options)
    console.log(search)
  return (
    <div>
      <Header />
      <h2 className="text-xl font-bold w-5/6 sm:w-1/2 mt-10 pb-6" id="dati">Dati</h2>
      <div className="flex flex-row w-full">
        <div class="w-1/2">
          <label className="pr-4">Cerca: </label>
          <input 
            className="border-2 rounded-none border-black px-4 py-2 focus:outline focus:outline-black focus:outline-offset-2 focus:outline-2" 
            type="text" 
            value={search} 
            name="seach" 
            placeholder="Ricerca..." 
            onChange={handleSearchChange}
            />
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <button onClick={exportToCsv} className="border-2 border-black px-8 py-2 font-thin focus:outline focus:outline-black focus:outline-offset-2 focus:outline-2">Esporta in CSV</button>
        </div>
      </div>
      <table className="table-fixed w-full mt-12 divide-y divide-black border-solid border-2 border-black">
        <thead className="bg-black text-white border-solid border-2 border-black">
          <tr className="text-left text-lg">
            {columns && columns.map(colName => (
              <th className="text-left px-6 py-3 whitespace-nowrap" scope="col" key={colName}>{colName}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-zinc-100 border-solid border-2 border-black">
            {comuni && comuni.filter((row) => {
              if(search === "")
              {
                return row
              }else if(row.codice_istat.toLowerCase().includes(search.toLowerCase()) || row.comune.toLowerCase().includes(search.toLowerCase()) || row.provincia.toLowerCase().includes(search.toLowerCase()) || row.regione.toLowerCase().includes(search.toLowerCase()))
              {
                return row
              }
            }).map(row => (
                <tr key={row.codice_istat} className="odd:bg-white even:bg-zinc-100">
                    <td className="px-6 py-3 whitespace-nowrap">{row.codice_istat}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{row.comune}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{row.provincia}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{row.regione}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{row.abitanti}</td>
                </tr>
            ))}    
        </tbody>
      </table>
      <div className="flex flex-col sm:flex-row w-full mt-4">
          <div className="w-full sm:w-1/2">
            Visualizzo {options.display} righe di {options.total} risultati
          </div>
          <div className="w-full sm:w-1/2">
            
          </div>
      </div>
      <Project />
      <Criteria />
      <Footer />
    </div>
  );
}
 
export default Home;