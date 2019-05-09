import React from 'react'
import PropTypes from 'prop-types'

import { App } from './src/components/app'

export const wrapRootElement = ({ element }) => <App>{element}</App>

wrapRootElement.propTypes = {
  element: PropTypes.any,
}
