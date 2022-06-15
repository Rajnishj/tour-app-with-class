import React, { Component } from 'react'

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts ")
    const data = await res.json()
    this.setState({
      items: data.slice(0, 20),
      isLoaded: true
    })
    console.log(this.state.items);
}
  render() {
const { items, isLoaded } = this.state
    return (
      <div>
        {!isLoaded ? <div>Loading</div> :
          items.map(item => (
          <li key={item.id}>{ item.title}</li>
        )) }
      </div>
    )
  }
}
export default AboutPage

//629f728461a370541b17b0a4


