const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, color, readyToEat } = this.props.fruit
    return (
      <Default title={`${name} Edit Page`} fruit={this.props.fruit}>
        <form method='POST' action={`/fruits/${_id}?_method=PUT`}>
          Name:<input type='text' name='name' defaultValue={name} /><br />
          Color:<input type='text' name='color' defaultValue={color} /><br />
          Is Ready to Eat:<input type='checkbox' name='readyToEat' defaultChecked={readyToEat} /><br />
          <input type='submit' value='Submit Fruit' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
