import Link from 'next/link'
import React from 'react'
import { StuntDouble } from '../interfaces'


type Props = {
  data: StuntDouble
}

const ListItem = ({ data }: Props) => (
  <Link href="/stunt-double/[id]" as={`/stunt-double/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
