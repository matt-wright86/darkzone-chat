var ChatBox = React.createClass({

  render: function() {
    return <div className="container">

    <div className="col-md-10">
      <div className="vright">
      {this.props.message.text}
       <cite>Posted by {this.props.message.user.username}</cite>
      </div>
    </div>

      </div>
  }
});
