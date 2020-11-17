import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Gameboard from "../components/gameboard"
import AnswerKey from "../components/answerkey"

export default function Home() {
  return <Layout>  
            <Header/>
            <Gameboard/>
            <AnswerKey/>
          </Layout>
}
