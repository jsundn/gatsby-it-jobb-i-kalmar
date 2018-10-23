import React from 'react'
import Helmet from 'react-helmet'
import dayjs from 'dayjs'

const JobPosting = ({
  description,
  date,
  title,
  location,
  address,
  company
}) => {
	const schema = {
	  "@context" : "http://schema.org/",
	  "@type" : "JobPosting",
	  "title": title,
	  "description" : description,
	  "hiringOrganization": company,
	  "datePosted" : date,
	  "jobLocation": {
	  	"@type": "Place",
	  	"name": location,
	  	"address": {
	    	"@type": "PostalAddress",
	        "name": address || location,
			"addressLocality": location,
			"addressRegion": "Kalmar län",
			"addressCountry": "SE"
	    }
	  },
	  "validThrough" : dayjs(date).add(1, 'month').format('YYYY-MM-DD')
	}

  return (
    <Helmet>
      <script type="application/ld+json">
        { JSON.stringify(schema, null, 2) }
      </script>
    </Helmet>
  )
}

export default JobPosting
