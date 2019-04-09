import React, { Component, createContext } from 'react';
import API from '../services';



const RootContext = createContext();
const Provider = RootContext.Provider;


const GlobalProvider = (ChildComponent) => {
  return(
    class ParentComponent extends Component {
      constructor(props){
        super(props);
        this.state = {
          SiteTitle : "Code Pelajar",
          PageTitle : "Code Pelajar - Tutorial Web Desain",
          isPost : false,
          isLogin : false,          
          access_token : "",
        }
      }

      dispatch = (action) => {
        
      }

      componentDidMount() {
        const gapiScript = document.createElement('script')
        gapiScript.src = 'https://apis.google.com/js/api.js?onload=onGapiLoad'
        // window.onGapiLoad = () => {
        //   window.gapi.load('client', {
        //     callback : () => {
        //       this.testGoogleAPI();
        //     },
        //     oneerror : () => {
        //       alert('Gapi Client Failed Loaded')
        //     },
        //     timeout : 5000,
        //     ontimeout : () => {
        //       alert("Timeout")
        //     }
        //   });
        // }
        document.body.appendChild(gapiScript)
      }
      testGoogleAPI = () => {
        // let GoogleAPI;
        // window.gapi.client.init({
        //   'apykey' : 'AIzaSyCgwo2fNF4rRz1YLLXG4EaRSSjSkN5Qv-E',
        //   'clientId' : '833767803850-3n8e02oeqo5qq9cbiu4me0r3ul2vth4n.apps.googleusercontent.com',
        //   'scope' : 'https://www.googleapis.com/auth/blogger'
        // })
        // .then(() => {
        //   let access_token = window.gapi.client.getToken().access_token;
        //   this.setState({
        //     access_token : access_token
        //   }, () => {
        //     console.log(this.state.access_token);
        //   })
        // })


        //example
        // window.gapi.client.request({
        //   'path' : 'https://www.googleapis.com/blogger/v3/blogs/3190947245348881579/posts/',
        //   'method' : 'post',
        //   'headers' : {
        //     'Authorization' : 'Bearer '+ access_token,
        //     'Content-Type' : 'application/json'
        //   },
        //   'body' : {
        //       "kind": "blogger#post",
        //       "blog": {
        //         "id": "3190947245348881579"
        //       },
        //       "title": "Test Post With React JS",
        //       "content": "With <b>exciting</b> content..."
        //     }
        // }).then((response)=> {
        //  console.log(response)
        // })
      }

      // getUserInfo 

      // testGoogleAPI = () => {
      //   let GoogleAuth;
      //   window.gapi.client.init({
      //     'apiKey' : 'AIzaSyCgwo2fNF4rRz1YLLXG4EaRSSjSkN5Qv-E',
      //     'clientId' : '833767803850-3n8e02oeqo5qq9cbiu4me0r3ul2vth4n.apps.googleusercontent.com',
      //     'scope' : 'https://www.googleapis.com/auth/blogger',
      //   })
      //   .then(() => {
      //     GoogleAuth = window.gapi.auth2.getAuthInstance();
      //     // GoogleAuth.isSignedIn.listen(updateSigninStatus)
      //     GoogleAuth.signIn();
      //     let bloggerId = "3190947245348881579";
      //     if(GoogleAuth.isSignedIn.get()){
      //       return GoogleAuth.client.request({
      //         'path' : `https://www.googleapis.com/blogger/v3/blogs/3190947245348881579/posts/`,
      //         'method' : 'POST',
      //         'headers': {
      //           'Content-Type' : 'application/json'
      //         },
      //         'body' : {
      //           "kind": "blogger#post",
      //           "blog": {
      //             "id": "3190947245348881579"
      //           },
      //           "title": "A new post",
      //           "content": "With <b>exciting</b> content..."
      //         }
      //       })
      //     }
      //     // let user = GoogleAuth.currentUser.get();
      //     // setSigninStatus();
      //     // 
      //   })
      //   .then((response) => {
      //     console.log(response)
      //   }, (error) => {
      //     console.log(error)
      //   })
      //     // .then((response) => {
      //     //   console.log(response)
      //     // }, (error) => {
      //     //   console.log("Error" + error)
      //     // })
      //   // })
      // }

      render(){
        // console.log("Google API Included on this :", this);
        const GlobalState = {
          state : this.state,
          dispatch : this.dispatch
        }
        return(
          <Provider value={GlobalState}>
             <ChildComponent {...this.props} />
          </Provider>
        );
      }
    }
  )
}

const Consumer = RootContext.Consumer;
export const GlobalConsumer = (ChildComponent) => {
  return(
    class ParentConsumer extends Component {
      render(){
        return(
          <Consumer>
            {
              value => {
                return(
                  <ChildComponent {...this.props} {...value} />
                )
              }
            }
          </Consumer>
        );
      }
    }
  );
}

export default GlobalProvider