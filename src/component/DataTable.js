
import React, { Component } from 'react'
import Table from 'react-tailwind-table'
import 'react-tailwind-table/dist/index.css' //use for a non tailwind project
import {col} from "./col";
import {row} from "./db";

class MyTable extends Component {

  rowcheck = (row,column, display_value) => {

    if (column.field === "dettagli") {
      return <button className="border p-2">See button</button>
    }

    if (column.field === "comune") {
      return <b>{display_value}</b>
    }

    return display_value
  }

  render() {
    return <Table columns={col} rows={row} per_page={20} table_header="Lista Comuni" row_render ={this.rowcheck}/>
  }
}

export default MyTable
