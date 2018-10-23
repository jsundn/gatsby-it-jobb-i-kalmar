import React from 'react'
import Helmet from 'react-helmet'

const Breadcrumbs = ({
  id,
  name,
  image
}) => {

  const schema = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@id": id,
        "name": name,
        "image": image
      }
    }]
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
