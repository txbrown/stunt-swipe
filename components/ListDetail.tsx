import * as React from 'react'
import { StuntDouble } from '../interfaces'


type ListDetailProps = {
  item: StuntDouble
}

const ListDetail = ({ item: double }: ListDetailProps) => (
  <div>
    <h1>Detail for {double.name}</h1>
    <p>ID: {double.id}</p>
  </div>
)

export default ListDetail
