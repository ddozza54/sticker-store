import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo";


// Layout  안에 넣은 요소들은 Layout 의 childeren 으로 자동으로 가게 되어 있다. 
const IndexPage = () => {
  return (
    <Layout title="Welcome to DevStickers 🎉">
      <div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage;

