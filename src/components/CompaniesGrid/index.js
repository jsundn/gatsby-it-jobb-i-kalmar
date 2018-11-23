import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Flex from 'components/UI/Base/Flex'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated'
import t from 'format-message'
import { BREAKPOINT as RespBreakpoint } from 'constants/responsive'
import SadMonsterGif from 'img/sad-monster.gif'
import {
	addedFilteringTag,
	addedFilteringInput,
	filteringNoHits
} from 'lib/GTM'

const BREAKPOINT = 500

let _inputChangeTimeoutId = null

const Title = styled('h1')`

`

const customSelectStyles = {
  option: (base, state) => ({
    ...base,
    borderBottom: '1px dashed #ccc',
    padding: 10,
    ':hover': {
		cursor: 'pointer'
	}
  }),
  control: (base) => ({
  	...base,
  	height: 50,
	border: 'none',
	borderRadius: 0
  }),
  multiValue: (styles, { data }) => {
    return {
		...styles,
		width: 'auto',
		backgroundColor: '#efefef',
		padding: '2px 8px',
		'font-size': 12,
		color: '#333',
		'white-space': 'nowrap'
    }
  },
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      color: '#d33131',
      cursor: 'pointer'
    },
  })
}

const MatchesText = styled('p')`
	color: white;
    font-size: 12px;
    font-style: italic;
    margin: auto auto auto 10px;
`

const Filters = styled(Flex)`
	flex-direction: row;
	flex: 1;
	padding: 20px;
	margin: 30px 0;
	background: #3fa565;

	@media (max-width: ${RespBreakpoint}px) {
		flex-direction: column;
	}
`

const FilterSection = styled(Flex)`
	flex: 2;
	height: 50px;
	margin: 10px;

	@media (max-width: ${RespBreakpoint}px) {
		flex: 1;
		margin-bottom: 20px;
	}
`

const TagsSelect = styled(Select)`
	flex: 1;
	height: 50px;
`

const Search = styled('input')`
	flex: 1;
	height: 50px;
	border: none;
	padding: 10px;
`

const Container = styled(Flex)`
	flex-direction: column;
	margin: 0 -40px;

	@media (min-width: ${RespBreakpoint}px) {
		margin: 0;
	}
`

const CompaniesWrapper = styled(Flex)`
	flex-direction: row;
	flex-flow: wrap;
	background: #f9f9f9;
	margin: 0;
	padding: 20px;
`

const Column = styled('div')`
	
`

const Company = styled('div')`
	overflow: hidden;
	margin: 0 0 20px 0;
	padding: 20px;
	position: relative;
`

const CompanyLogo = styled(Img)`
	margin-bottom: 40px;
	max-width: 200px;
	padding-left: 1px;
`

const CompanyInner = styled('div')`
	background: white;
`

const CompanyHeader = styled('header')`
	font-size: 22px;
	padding: 20px;
	margin: 0;
	line-height: 1.3;
	background: #00689e;
	padding: 10px;
`

const CompanyTitle = styled('h2')`
	color: white;
	font-size: 16px;
	font-weight: 300;
	margin: 0;
	text-decoration: none;
`

const CompanyContent = styled('section')`
	padding: 30px;
`

const CompanyDescription = styled('p')`
	font-size: 14px;
	line-height: 24px;
	font-weight: 400;
	position: relative;
	overflow: hidden;
	margin-top: 0;
	color: #3a3a3b;
`

const CompanyLink = styled('a')`
	font-size: 12px;
	display: inline-block;
	text-decoration: none;
	padding: 10px 0;
	color: #333;

	&:hover {
		text-decoration: underline;
	}
`

const CompanyFooter = styled('footer')`
	padding: 20px;
	background: #efefef;
`

const TagWrapper = styled(Flex)`
	flex-direction: row;
	flex-flow: wrap;
	margin-top:20px;
`

const NoResultsWrapper = styled(Flex)`
	width: 100%;
`

const NoResultsInner = styled(Flex)`
	margin: auto;
	flex-direction: column;
`

const NoResults = styled('span')`
	color: #333;
	font-weight: 800;
	font-size: 15px;
	padding: 20px;
	margin: auto;
`

const NoResultsImage = styled('img')`
	width: 300px;
	margin: auto;
`

const Name = styled('p')`
	color: #333;
`

const TagText = styled('span')`
    margin: 0 8px 8px 0;
    padding: 2px 8px;
    font-size: 12px;
    color: #333;
    background: #ebec95;
    white-space: nowrap;
    text-transform: uppercase;
`

const Tag = ({
	text
}) => {
	return (
		<TagText>{ text }</TagText>
	)
}

const getTags = items => {
	let tags = []

    items.forEach(company => {
        if (Array.isArray(company.tags)) {
        	const filteredTags = company.tags.filter(tag => !tags.includes(tag))
            tags = [...tags, ...filteredTags]
        }
    })

    tags = tags.sort((a, b) => {
        a = a.replace(/-|\s/g,"").toLowerCase()
        b = b.replace(/-|\s/g,"").toLowerCase()

        if (a < b) return -1
        if (a > b) return 1

        return 0
    })

    return tags.map(tag => ({ value: tag, label: tag }))
}

const getNumberOfColumns = ref => {
    const width = ref && ref.current ? ref.current.clientWidth : window.innerWidth

    if (width > BREAKPOINT) {
        return Math.ceil(width / (BREAKPOINT))
    } else {
        return 1
    }
}

class Companies extends Component {
	mainRef = React.createRef()

    state = {
        filters: {
            input: ""
        },
        selectedTags: [],
        companies: [],
        tags: [],
        sizeModifierClassName: null,
        cols: 1
    }

    handleInputChange = e => {
    	window.clearTimeout(_inputChangeTimeoutId)

    	this.setState({
    		filters: {
    			...this.state.filters,
    			input: e.target.value
    		}
    	})

    	_inputChangeTimeoutId = window.setTimeout(() => {
    		if (this.state.filters.input) {
    			addedFilteringInput(this.state.filters.input)
    		}
    	}, 500)
    }

    render() {

        let columns = this.getPopulatedColums()

        return (
        	<div ref={this.mainRef}>
	        	<Container>
					<p>Nedan har vi sammanställt IT-företag verksamma i Kalmarregionen. Om ni vill komma med i listan eller ändra den information eller bibld som är knuten till ert företag så <a href="mailto:kontakt@itjobbikalmar.se">kontakta oss</a> gärna.</p>
	        		<Filters>
	        			<FilterSection>
	        				<Search placeholder={t('Fritext')} value={this.state.filters.input} onChange={this.handleInputChange} />
	        			</FilterSection>
	        			<FilterSection>
	        				<TagsSelect
			        			isMulti={true}
			        			styles={customSelectStyles}
			        			onChange={this.handleOnTagSelect}
			        			closeMenuOnSelect={false}
			        			components={makeAnimated()}
			        			options={this.state.tags}
		        			/>
	        			</FilterSection>

	        			<MatchesText>{ t('{number} företag matchar filtreringen', { number: columns.reduce((total, column) => total + column.length, 0) }) }</MatchesText>
	        		</Filters>

	        		<CompaniesWrapper>
	                    { columns.length ? columns.map((column, index) => (
	                    	<Column style={{width: `${100/ this.state.cols}%`}}>

	                            { column.map(item => item) }

	                        </Column>
	                    )) : (
	                    	<NoResultsWrapper>
	                    		<NoResultsInner>
		                    		<NoResults>{ t('Det finns inga företag som matchar din sökning') }</NoResults>

		                    		<NoResultsImage src={SadMonsterGif} />
		                    	</NoResultsInner>
	                    	</NoResultsWrapper>
                    	)
	                	}
	                </CompaniesWrapper>
	        	</Container>
        	</div>
        )
    }
    
    handleOnTagSelect = tags => {
    	const addedTag = tags.filter(tag => !this.state.selectedTags.find(selectedTag => selectedTag !== tag))

    	if (addedTag && addedTag[0]) {
    		addedFilteringTag(addedTag[0])
    	}

        this.setState({ selectedTags: tags })
    }

    filtercompanies = companies => {
        if (this.state.filters.input) {
            companies = companies.filter(company => {
                return company.name.toLowerCase().replace(/\s/g,'').indexOf(this.state.filters.input.replace(/\s/g,'').toLowerCase()) > -1
            })
        }

        if (this.state.selectedTags.length) {
            companies = companies.filter(company => {
                company.tags = company.tags ? company.tags : [] // all companies should have tags defined, but 💩 happends.

                return this.state.selectedTags.every(selectedTag => company.tags.find(tag => tag.toLowerCase() === selectedTag.value.toLowerCase()))
            })
        }

        return companies
    }

    getPopulatedColums = () => {
        const columns = Array.from({ length: this.state.cols }, () => [])

        let fixedIndex = 0
        let companies = this.filtercompanies(this.state.companies)

        if (!companies.length) {
            return []
        }

        companies.map((company, index) => {

                if (fixedIndex >= this.state.cols) {
                    fixedIndex = 0
				}

                columns[fixedIndex].push((
                	<Company key={company.name}>
	                    <CompanyInner>
	                        <CompanyHeader>
	                            <CompanyTitle>{ company.name }</CompanyTitle>
	                        </CompanyHeader>
	                        <CompanyContent>
	                        	{ company.logo && company.logo.childImageSharp && <CompanyLogo fluid={company.logo.childImageSharp.fluid} /> }
	                            <CompanyDescription>{ company.description }</CompanyDescription>
	                        </CompanyContent>
	                        <CompanyFooter>
								{ company.tags.length > 0 &&
									(
										<TagWrapper>
											{ company.tags.map(tag => (
												<Tag
													key={`tag-${company.id}-${tag}`}
													text={tag}
												/>
											)) }
										</TagWrapper>
									)
								}

								<CompanyLink href={company.website} rel="nofollow">
									{company.website}
								</CompanyLink>
	                        </CompanyFooter>
	                    </CompanyInner>
	                </Company>
                ))

                fixedIndex++

                return null

        })

        return columns
    }

    getSizeModifierClassName = () => {
        return window.innerWidth < BREAKPOINT ? "thin" : "wide"
    }

    onResize = () => {
        if (this.mainRef && this.mainRef.current) {
        	this.setState({
	            sizeModifierClassName: this.getSizeModifierClassName()
	        }, () => {
	        	this.setState({
	        		cols: getNumberOfColumns(this.mainRef)
	        	})
	        })
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize)
    }

    componentDidMount() {
    	this.setState({
    		tags: getTags(this.props.items),
    		companies: this.props.items,
    		cols: getNumberOfColumns(this.mainRef)
    	})

        window.addEventListener("resize", this.onResize)

        // this.onResize()
    }
}

const CompaniesGrid = () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
          edges {
            node {
              partners {
                title,
                items {
                  name,
                  logo {
                    childImageSharp {
                      fluid(maxWidth: 1000) {
                        srcWebp
                        srcSetWebp
                        aspectRatio
                        src
                        srcSet
                        sizes
                      }
                    }
                  }
                  description,
                  level,
				  tags,
				  website
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      let { title, items } = data.allDataJson.edges[0].node.partners

      return (
        <Companies items={items.filter(item => item.logo)} />
      )

    }}
  />
)

export default CompaniesGrid