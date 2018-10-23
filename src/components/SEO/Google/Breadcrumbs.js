import React from 'react'
import Helmet from 'react-helmet'
import t from 'format-message'

const Breadcrumbs = ({
  url,
  name
}) => {

  const makeItem = (position, url, name) => (
    {
      "@type": "ListItem",
      "position": position,
      "item": {
        "@id": url,
        "name": name
      }
    }
  )

  let items = []

  items = [makeItem(1, process.env.GATSBY_APP_URL, t('startsida'))]

  if (url !== "/") {
    items = [...items, makeItem(2, `${process.env.GATSBY_APP_URL}${url}`, name)]
  }

  const schema = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        { JSON.stringify(schema, null, 2) }
      </script>
    </Helmet>
  )
}

export default Breadcrumbs
