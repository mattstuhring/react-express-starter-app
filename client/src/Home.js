import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/welcome');
      const result = await response.json();
      console.log(result);

      this.setState({
        message: result.message
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { message } = this.state;

    return (
      <div id='home'>
        <div
          className='p-4 shadow-4 rounded-3'
          style={{ backgroundColor: 'whitesmoke' }}
        >
          <h2>{message}</h2>
          <p>This is a simple hero unit.</p>

          <hr className='my-4' />

          <button type='button' className='btn btn-primary'>
            Learn more
          </button>
        </div>
      </div>
    );
  }
}
