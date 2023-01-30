import React from 'react'
import TranslationForm from '../components/Translation/TranslationForm'
import withAuth from '../hoc/withAuth'

const Translation = () => {
  return (
    <>
    <h1>Translate</h1>
    <TranslationForm/>
    </>
  )
}
export default withAuth(Translation)

