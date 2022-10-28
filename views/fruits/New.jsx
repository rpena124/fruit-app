const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Fruit'>

        <form method='POST' action='/fruits'>
          Name:<input type='text' name='name' placeholder='Name of Fruit Here' /><br />
          Color:<input type='text' name='color' placeholder='Color of Fruit Here' /><br />
          Is Ready to Eat:<input type='checkbox' name='readyToEat' /><br />
          <input type='submit' value='Submit Fruit' />
        </form>

      </Default>

    )
  }
}

module.exports = New
