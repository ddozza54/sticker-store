import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/Layout"


const IndexPage: React.FC<PageProps> = () => {
  return (
    // Layout  안에 넣은 요소들은 Layout 의 childeren 으로 자동으로 가게 되어 있다. 
    <Layout title="Welcome to DevStickers 🎉">
      <div>
      </div>
    </Layout>
  )
}
//Head 컴포넌트 상에 어떤 요소를 리턴하든, 안에 적은 게 자동으로 곧장 위에 표시됨. 
//Gatsby에는 페이지의 문서 헤드에 요소를 추가할 수 있는 내장 head가 포함되어 있습니다.
export function Head() {
  return <title>DevStickes!</title>
}

export default IndexPage

