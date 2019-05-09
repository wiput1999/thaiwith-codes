import React from 'react'

import { App } from '../components/app'
import { Featured } from '../components/featured'
import { More } from '../components/more'

export default class MockPage extends React.Component {
  public render() {
    return (
      <App>
        <Featured />
        <More />
      </App>
    )
  }
}
