import React, { Component } from 'react';
//import axios from 'axios';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class Register extends Component {
 //Component is the root of all components
constructor(){
    super();
    //Built-in React property called state
    //state is an object
    this.state={
        name: '',
        email:'',
        password:'',
        password2:'',
        errors:{}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e){
  //Built-in setState function with key and value
   this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
  //you want button to have aschynchronous call
  e.preventDefault();  //prevent default behavior of button

  const newUser = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
    password2: this.state.password2
  };

  this.props.registerUser(newUser, this.props.history);
  // axios.post('/api/users/register', newUser)
  // .then(res => console.log(res.data))
  // .catch(err => this.setState({errors:err.response.data}));
}

componentDidMount(){
  if(this.props.auth.isAuthenticated){
    this.props.history.push('/dashboard');
  }
}
//This is a lifecycle component
//When you are mapping your data to props then this component will get triggered
//Whenever ypour property value gets changed, this component will trigger, that is the 5th step in diagram
componentWillReceiveProps(nextProps){

  if(nextProps.errors){
    this.setState({errors: nextProps.errors});
  }
}
  render() {
    const {errors} = this.state;
    //const errors = this.state.errors;
     
    return (
        <div className="register">
        
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg', {'is-invalid':errors.name})} 
                  //value is a property
                  placeholder="Name" name="name" value={this.state.name} 
                  //Two way binding by onChange
                  //Here onChange is an event and not a property
                  onChange={this.onChange} required />
                     {errors.name &&(<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                  <input type="email" className={classnames('form-control form-control-lg', {'is-invalid':errors.email})} placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
                     <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                     {errors.email &&(<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                  <input type="password" className={classnames('form-control form-control-lg', {'is-invalid':errors.password})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                  {errors.password &&(<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                  <input type="password" className={classnames('form-control form-control-lg', {'is-invalid':errors.password2})} placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
                  {errors.password2 &&(<div className="invalid-feedback">{errors.password2}</div>)}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired

}
//This is where we read data back from store
const mapStateToProps  = (state) => ({
  auth: state.auth,
  errors: state.errors


})
//connect is connecting your component to Redux store
export default connect(mapStateToProps, {registerUser})(withRouter(Register));