import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import Prices from '../components/prices'

const Index = (props) => (
  <Layout>
      {/* {JSON.stringify(props)} */}
      <br /> <br />
      {/* {props.bpi.time.updated} */}
      <Prices bpi={props.bpi} />
  </Layout>
)

Index.getInitialProps = async ({req}) => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
      bpi: data.bpi,
      error: 'none'
    }
}

export default Index
