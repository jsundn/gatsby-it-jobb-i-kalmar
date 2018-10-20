import React from 'react'

export default class Foo extends React.Component {
  render() {
    return null
  }
}
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'

// import Layout from 'components/Layout'

// const Index = ({ children, data }) => console.log("data", data) || (
//   <Layout
//     metaData={data.site.siteMetadata}
//     logo={data.logo}
//     fullBleedCoverImage={data.fullBleedCoverImage}
//   >
//   </Layout>
// )

// Index.propTypes = {
//   children: PropTypes.array,
// }

// export default Index

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title,
//         description,
//         subheader
//       }
//     }

//     fullBleedCoverImage: file(relativePath: { eq: "indexFullBleedCoverImage.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 2000, maxHeight: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }

//     logo: file(relativePath: { eq: "logo.png" }) {
//       childImageSharp {
//         fixed(height: 70) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `