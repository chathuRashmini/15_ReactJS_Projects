import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { setsearchTerm } = useGlobalContext()

  return (
    <div>
      <h2>search form component</h2>
    </div>
  )
}

export default SearchForm
