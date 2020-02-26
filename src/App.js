import React, { Component } from 'react';
import './App.css';

import api from './services/api';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class App extends Component {
  render() {
    const responseFacebook = (response) => {
      console.log(response);
      api.post('/profile', {
        name: response.name,
        emailId: response.email,
        picture: response.picture.data.url
      });

      console.log("id = " + response.id);
      
    }

    const responseGoogle = (response) => {
      console.log(response);
      // const postObject = {
      //   name: response.profileObj.name,
      //   emailId: response.profileObj.email,
      //   picture: response.profileObj.imageUrl
      // };
      console.log("email = " + response.profileObj.email);
      console.log("name = " + response.profileObj.name);
      console.log("picture = " + response.profileObj.imageUrl);
      console.log("googleId = " + response.profileObj.googleId);

      api.post('/profile', {
        name: response.profileObj.name,
        emailId: response.profileObj.email,
        picture: response.profileObj.imageUrl
      });
      
      
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="2932342283494968" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />


        <GoogleLogin
          clientId="1001565160020-db4u7clv46k0a82ldmna2ti1k78igaet.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
