import React from "react"
import "./doc.module.scss"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../../components/layout/layout"
import DocSidebar from "../../components/doc-sidebar/doc-sidebar"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import { Link } from "gatsby"
import SEO from "../../components/seo"

class Doc extends React.Component {
  render() {
    let articles = [];
    const doc = this.props.data.current

    if (this.props.data.children.edges.length > 0) {
      articles.push(<h3 key="h3-articles">Articles</h3>)

      this.props.data.children.edges.forEach(child => {
        articles.push(<div key={ child.node.path }><Link to={ child.node.path } dangerouslySetInnerHTML={{ __html: child.node.title }}/></div>)
      })
    }

    return (
      <Layout>
        <SEO title={ doc.title } description="Easily sell and manage your licenses through WooCommerce" />
        <div className="doc">
          <div className="doc-content">
            <div className="doc-breadcrumbs">
              <Breadcrumbs pathname={ this.props.location.pathname }/>
            </div>
            <h1 className="doc-title" dangerouslySetInnerHTML={{ __html: doc.title }} />
            <div className="doc-body" dangerouslySetInnerHTML={{ __html: doc.content }} />
            <div className="doc-articles">
              { articles }
            </div>
            <div className="doc-footer">
              <div className="doc-still-stuck">
                <i className="fas fa-envelope"/> Still stuck? <Link to="/contact/">How can we help?</Link>
              </div>
              <div className="doc-updated-at">
                <i>Updated on { doc.modified }</i>
              </div>
            </div>
          </div>
          <DocSidebar parentData={ this.props }/>
        </div>
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
    query($wordpress_id: Int!, $wordpress_parent: Int!) {
        current: wordpressWpDocs(wordpress_id: { eq: $wordpress_id }) {
            title
            content
            modified(formatString: "D.M.Y")
            slug
            path
            wordpress_id
            wordpress_parent
        },
        children: allWordpressWpDocs(filter: { wordpress_parent: { eq: $wordpress_id } }, sort: { fields: menu_order, order: ASC }) {
            edges {
                node {
                    title
                    slug
                    path
                    menu_order
                    wordpress_id
                    wordpress_parent
                }
            }
        },
        siblings: allWordpressWpDocs(filter: { wordpress_parent: { eq: $wordpress_parent } }, sort: { fields: menu_order, order: ASC }) {
            edges {
                node {
                    title
                    slug
                    path
                    menu_order
                    wordpress_id
                    wordpress_parent
                }
            }
        }
    }
`