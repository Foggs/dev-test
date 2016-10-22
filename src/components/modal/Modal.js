import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap'

const ControlledModalExample = React.createClass({

  getInitialState(){
    return { showModal: false, 
              wordEntry: '',
              showError: false
            };
  },

  close() {
    if(this.state.wordEntry.length > 0) {
      this.dismiss();
    } else {
      this.open();
    }
  },

  dismiss() {
    this.setState({ showModal: false });
  },

  open(){
    this.setState({ showModal: true});
  },

  update(e) {
    e.preventDefault();
    console.log(e.target.value);
    if(this.validate(e.target.value)) {
      this.setState({ wordEntry: e.target.value.toLowerCase().trim(), showError:false });
    } else {
      this.setState({ showError: true });
    }
  },

  getErrorState() {
    return this.state.showError ? 'form-group has-error' : 'form-group';
  },

  validate(str) {
    var patt = new RegExp(/([A-Za-z])/g );
    return patt.test(str);
  },

  render() {
    return (
      <div>
        <Button onClick={this.open}>
          Launch modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.dismiss}>
          <Modal.Header closeButton>
            <Modal.Title>Hangman Word Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={this.getErrorState()}>
              <div className="col-sm-10">
                  <input onChange={this.update} type="text" className="form-control" 
                  id="wordEntry" placeholder="Enter a Word..."/>
                  {this.state.showError ? <p className="bg-danger text-danger">Enter only letters</p> : ''}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
export default ControlledModalExample;
