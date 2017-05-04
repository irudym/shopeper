/**
 * Created by igor rudym on 25/03/2017.
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SectionMenu from './components/section_menu';
import Table from './components/table';
import AddBug from './components/add_bug';
import ViewBug from './components/view_bug';

class BugsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: this.props.bugs,
      bug: {
        title: 'loading',
        description: 'loading',
        comments: [],
      },
      addIsOpen: false,
      viewIsOpen: false,
      errors: [],
      menu: [
        {
          id: 100,
          text: 'Add a bug',
          icon: 'plus',
        },
        {
          id: 200,
          text: `Trash (${this.props.trashCount})`,
          icon: 'trash',
        },
      ],
      title: '',
      description: '',
      comment: '',
      trashCount: this.props.trashCount,
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
    this.handleBugDelete = this.handleBugDelete.bind(this);
    this.handleBugClick = this.handleBugClick.bind(this);
    this.handleAddClose = this.handleAddClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDscChange = this.handleDscChange.bind(this);

    this.handleViewClose = this.handleViewClose.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);

    this.validates = this.validates.bind(this);
    this.validatesComment = this.validatesComment.bind(this);
  }

  validates() {
    const errors = [];

    // check fields
    if (this.state.title.replace(/\s/g, '') === '') {
      errors.push('Title cannot be blank!');
    }
    if (this.state.description.replace(/\s/g, '') === '') {
      errors.push('Description cannot be empty!');
    }
    return errors;
  }

  validatesComment() {
    const errors = [];

    // check fields
    if (this.state.comment.replace(/\s/g, '') === '') {
      errors.push('Comment cannot be blank!');
    }
    return errors;
  }

  handleSubmit(e) {
    const errors = this.validates();
    if (errors.length !== 0) {
      e.stopPropagation();
      e.preventDefault();
      // show errors
      this.setState({
        errors,
      });
      return false;
    }
    this.setState({
      errors: [],
    });
    return false;
  }

  handleTitleChange(value) {
    this.setState({
      title: value.target.value,
    });
  }

  handleDscChange(value) {
    this.setState({
      description: value.target.value,
    });
  }

  handleMenuClick(e, id) {
    e.stopPropagation();
    e.preventDefault();
    if (id === 100) {
      this.setState({
        addIsOpen: true,
      });
    }
    if (id === 200) {
      window.location = '/director/bugs/trash';
    }
  }

  handleBugClick(e, id) {
    e.stopPropagation();
    e.preventDefault();

    fetch(`/director/bugs/${id}.json?user_token=${this.props.userToken}`)
      .then(response => response.json())
      .then((bug) => {
        this.setState({
          bug,
        });
      });
    this.setState({
      viewIsOpen: true,
    });
  }

  handleBugDelete(e ,id) {
    e.stopPropagation();
    e.preventDefault();

    // send delete request
    fetch(`/director/bugs/${id}`, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': this.props.token,
      },
      credentials: 'same-origin',
    }).then((response) => {
      const bugs = this.state.bugs.filter(bug => (
        bug.id !== id
      ));
      const menu = this.state.menu;
      menu[1] = {
        ...menu[1],
        text: `Trash (${this.state.trashCount + 1})`,
      };
      this.setState({
        trashCount: this.state.trashCount + 1,
        bugs,
        menu,
      });
    });
  }

  handleFilterSelect(item) {
  }

  handleAddClose() {
    this.setState({
      addIsOpen: false,
    });
  }

  handleViewClose() {
    this.setState({
      viewIsOpen: false,
    });
  }

  handleAddComment(e) {
    e.preventDefault();
    e.stopPropagation();

    // validate comment
    if (this.validatesComment().length !== 0) {
      console.log("Empty comment")
      return;
    }

    fetch(`/director/bugs/${this.state.bug.id}/add_comment`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': this.props.token,
      },
      body: JSON.stringify({ comment: this.state.comment }),
      credentials: 'same-origin',
    })
    .then(response => (
      response.json()
    ))
    .then((response) => {
      console.log("Response: ", response);
      const bug = {
        ...this.state.bug,
        comments: response.comments,
      };
      this.setState({
        bug,
        comment: '',
      });
    });
  }

  handleCommentChange(value) {
    this.setState({
      comment: value.target.value,
    });
  }
  /**
   * filter
   * <div className="form-horizontal">
     <FormSelectContainer
       options={[{ id: 1, value: 'all' }, { id: 2, value: 'owned' }, { id: 3, value: 'recent' }]}
       name="Filter"
       model="none"
       onSelect={this.handleFilterSelect}
     />
   </div>
   */

  render() {
    return (
      <div>
        <SectionMenu menu={this.state.menu} onClick={this.handleMenuClick} />
        <div className="row">
          <div className="col-md-12">
            <Table
              header={['Owned', 'Title', 'Comments']}
              records={this.state.bugs}
              withDelete={true}
              onDelete={this.handleBugDelete}
              onClick={this.handleBugClick}
            />
          </div>
        </div>
        <AddBug
          title="Add bug"
          isOpen={this.state.addIsOpen}
          onClose={this.handleAddClose}
          onSubmit={this.handleSubmit}
          token={this.props.token}
          action={this.props.action}
          id={this.props.id}
          onTitleChange={this.handleTitleChange}
          onDescriptionChange={this.handleDscChange}
          errors={this.state.errors}
        />
        <ViewBug
          bug={this.state.bug}
          onClose={this.handleViewClose}
          isOpen={this.state.viewIsOpen}
          onComment={this.handleAddComment}
          onCommentChange={this.handleCommentChange}
          comment={this.state.comment}
        />
      </div>
    );
  }
}

BugsApp.propTypes = {
  token: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bugs: PropTypes.arrayOf(PropTypes.object).isRequired,
  trashCount: PropTypes.number.isRequired,
  userToken: PropTypes.string.isRequired,
};

const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <BugsApp
    userToken={appBlock.dataset.token}
    token={$('meta[name=csrf-token]').attr('content')}
    action="bugs"
    id="bug_id"
    bugs={JSON.parse(appBlock.dataset.bugs)}
    trashCount={JSON.parse(appBlock.dataset.trash)}
  />,
  appBlock,
);
