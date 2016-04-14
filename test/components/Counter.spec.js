import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../../components/Counter'

function setup(value = 0) {
  const component = shallow(
    <Counter value={value} />
  )

  return {
    component: component,
    p: component.find('p')
  }
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^Clicked: 0 times/)
  })
})
