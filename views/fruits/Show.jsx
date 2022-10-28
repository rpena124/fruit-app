const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    // Object destructoring, order does not matter becasue its arranged by the keys
    const { name, color, readyToEat} = this.props.fruit
    const capName = name[0].toUpperCase() + name.substring(1)
    // return can only return onw top level item
    return (
    // {} when it see this it knows there will be JS code
    // you can us empty carrots to wrap the elemnts, which is a fragment use to group the elements
      <Default title={`${capName} Show Page`} fruit={this.props.fruit}>
        <p>{capName} is {color} and {readyToEat ? 'it\'s ready to eat' : 'it\'s not ready to eat'}</p>
      </Default>

    )
  }
}

module.exports = Show
