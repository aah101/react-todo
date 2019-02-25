import React, { Component } from 'react';
import Navigation from './components/navigation';
import Signin from './components/Signin';
import Register from './components/Register'; 
import Home from './components/todo/containers/Home.js'//to go straight to todo, change index.js to home
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // doesn't include either signin or register
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
      console.log(route)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } 
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? 
          <div>
            <Home />
          </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )   
        }
      </div>
    );
  }
}

 // ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
 //             : route === 'register'
 //              ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
 //              : <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />



export default App;


// import React, { Component } from 'react';
// import Particles from 'react-particles-js';
// import Navigation from './components/navigation';
// import Signin from './components/Signin';
// import Register from './components/Register'; 
// import Home from './components/Home.js'
// import './App.css';

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 30,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: '',
//       // imageUrl: '',
//       // box: {},
//       route: 'signout',
//       isSignedIn: false,
//       user: {
//         id: '',
//         name: '',
//         email: '',
//         entries: 0,
//         joined: ''
//       }
//     }
//   }

//   // componentDidMount() {
//   //   fetch('http://localhost:5000')
//   //     .then(response => response.json())
//   //     .then(console.log)
//   // }

//   loadUser = (data) => {
//     this.setState({user: {
//       id: data.id,
//       name: data.name,
//       email: data.email,
//       entries: data.entries,
//       joined: data.joined
//     }})
//   }


//   // displayFaceBox = (box) => {
//   //   this.setState({box: box});
//   // }

//   // onInputChange = (event) => {
//   //   this.setState({input: event.target.value});
//   // }

//   // onButtonSubmit = () => {
//   //   this.setState({imageUrl: this.state.input});
//   //   app.models
//   //     .predict(
//   //       Clarifai.FACE_DETECT_MODEL,
//   //       this.state.input)
//   //     .then(response => {
//   //       if (response) {
//   //         fetch('http://localhost:3000/image', {
//   //           method: 'put',
//   //           headers: {'Content-Type': 'application/json'},
//   //           body: JSON.stringify({
//   //             id: this.state.user.id
//   //           })
//   //         })
//   //           .then(response => response.json())
//   //           .then(count => {
//   //             this.setState(Object.assign(this.state.user, { entries: count}))
//   //           })

//   //       }
//   //       this.displayFaceBox(this.calculateFaceLocation(response))
//   //     })
//   //     .catch(err => console.log(err));
//   // }

//   onRouteChange = (route) => {
//     if (route === 'signout') {
//       this.setState({isSignedIn: false})
//     } else if (route === 'home') {
//       this.setState({isSignedIn: true})
//     }
//     this.setState({route: route});
//   }

//   render() {
//     const { isSignedIn, route } = this.state;
//     return (
//       <div className="App">
//          <Particles className='particles'
//           params={particlesOptions}
//         />
//         <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
//         { route === 'home'
//           ? <div>
            
//                 <Home />
              
//             </div>
//           : (
//              route === 'signout'
//              ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
//              : <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
//             )
//         }
//       </div>
//     );
//   }
// }

// export default App;