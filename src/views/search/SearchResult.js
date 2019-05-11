import React from 'react'

import {
  InternalLink,
} from '../../components/links'

const SearchResult = ({hit}) => (
  <InternalLink to={`/${hit.slug}`}>
    {hit.title}
  </InternalLink>
)

export default SearchResult
