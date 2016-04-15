import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../../components/Counter'

function setup(value = 0) {
  const actions = {
    onIncrement: expect.createSpy()
  }

  const component = shallow(
    <Counter value={value} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p')
  }
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^Clicked: 0 times/)
  })

  it('first button should call onIncrement', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onIncrement).toHaveBeenCalled()
  })
})
