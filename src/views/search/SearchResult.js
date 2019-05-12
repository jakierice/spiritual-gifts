import React from 'react'

import {
  InternalLink,
} from '../../ui-elements/links'

const SearchResult = ({hit}) => (
  <InternalLink to={`/${hit.slug}`}>
    {hit.title}
  </InternalLink>
)

export default SearchResult
