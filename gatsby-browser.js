import React from 'react'
import PropTypes from 'prop-types'

import { App } from './src/components/app'

export const wrapPageElement = ({ element }) => <App>{element}</App>

wrapPageElement.propTypes = {
  element: PropTypes.any,
}
