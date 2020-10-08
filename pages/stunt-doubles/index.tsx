import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { StuntDouble } from '../../interfaces'
import { stuntDoubleList } from '../../utils/sample-data'


type Props = {
  items: StuntDouble[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Stunt doubles List | Next.js + TypeScript Example">
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: StuntDouble[] = stuntDoubleList
  return { props: { items } }
}

export default WithStaticProps
