import React, { Component } from 'react';
import AssignmentContents from './AssignmentContents';
import '../../css/assignmentList.css';

class AssignmentList extends Component {
  state = {
    assignments: [
      {title: '프로젝트 제안서', info: '소프트웨어 공학 프로젝트 제안서를 제출하세요'},
      {title: '프로젝트 제안서', info: '소프트웨어 공학 프로젝트 제안서를 제출하세요'},
      {title: '프로젝트 제안서', info: '소프트웨어 공학 프로젝트 제안서를 제출하세요'},
    ]
  }
    render() {
      return (
        <div id="assignment-list-section">
          <AssignmentContents assignments={this.state.assignments} />
        </div>
      )
    }
}

export default AssignmentList;