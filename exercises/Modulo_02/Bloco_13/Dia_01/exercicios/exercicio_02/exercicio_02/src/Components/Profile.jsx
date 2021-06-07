import React, { Component } from 'react';
import PersonCard from './Person'

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      person: [],
    };
  }

  componentDidMount() {
    this.userName();
  }

  async userName() {
    try {
      const url = 'https://api.randomuser.me/ ';
      const response = await fetch(url);
      const dataJson = await response.json();
      this.setState({
        person: dataJson.results,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { person, loading } = this.state
    console.log(person);
    if (loading) return <div>Loading....</div>
    return (
      <div className="git d-flex flex-column justify-content-center align-items-center">
        { 
          person.map((current, index) => (
            <PersonCard key={ index } person={ this.getUserElements(current) } />
          ))
        }
      </div>
    );
  }
}

export default Profile;