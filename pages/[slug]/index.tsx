import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import IProductDTO from '../../interfaces/items/UpdateItemDTO'
import { api } from '../../services/api'

interface IParams extends ParsedUrlQuery {
    slug: string
}

export default function ProductDetails({item}: {item: IProductDTO}) {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>{item?.name}</div>
        <div>{item?.description}</div>
        <div>{item?.price}</div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
        fallback: false,
      }
  }

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams
    const {data} = await api.get(`/Item/item?idProduct=${slug}`)
    return {
      props: {item: data},
    }
  }