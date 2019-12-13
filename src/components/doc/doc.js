import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../layout/layout"

class Doc extends Component {
  render() {
    const doc = this.props.data.wordpressWpDocs

    return (
      <Layout>
        <h1>{doc.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: doc.content }}></div>
      </Layout>
    )
  }
}

Doc.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Doc

export const docQuery = graphql`
    query($id: String!) {
        wordpressWpDocs(id: { eq: $id }) {
            title
            slug
            content
        }
    }
`