import React, { Component } from 'react';
import Header from '../components/basic/Header';
import Modal from '../components/modal/Modal';
import SideMenu from '../components/main/SideMenu';
import { ModalConsumer } from '../context/ModalProvider';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actionTypes from '../action/assignment';
import { bindActionCreators } from 'redux';

class DefaultLayout extends Component {
  render() {
    return (
      <ModalConsumer>
        { ({ state, actions }) => (
            <div>
              <Header state = {state} actions = {actions} />
              {this.renderSidemenu(state, actions)}
              {this.props.children}
            </div>
          )}
      </ModalConsumer>
    )
  }
  
  renderModal = (state, actions, selectedCard) => {
    if(state.isModal) return (
      <Modal 
        state = {state} 
        actions = {actions} 
        selectCard = { selectedCard }/>
    )
  }

  renderSidemenu = (state, actions) => {
    const location = browserHistory.getCurrentLocation().pathname;
    switch(location) {
      case '/main' : 
        return (
          <div>
            <SideMenu 
              subjects = {this.props.studentSubjects} 
              selectedSubject = {this.props.studendSelectedSubject}
              selectSubject = {this.props.selectSubject}
            />
            {this.renderModal(state, actions, this.props.studentSelectedCard)}
          </div>
        )
      case '/admin/main' : 
        return (
          <div>
            <SideMenu 
              subjects = {this.props.adminSubjects} 
              selectedSubject = {this.props.adminSelectedSubject}
              selectSubject = {this.props.selectSubject}
            />
            {this.renderModal(state, actions, this.props.adminSelectedCard)}
          </div>
        )
      default : return;
    }
  }
}

const mapStateToProps= (state) => {
  return {
    studentSubjects: state.student.subjects,
    studendSelectedSubject: state.student.subjects[state.student.selectedSubject],
    studentSelectedCard: state.student.selectedCard,
    adminSubjects: state.admin.subjects,
    adminSelectedSubject: state.admin.subjects[state.admin.selectedSubject],
    adminSelectedCard: state.admin.selectedCard
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);