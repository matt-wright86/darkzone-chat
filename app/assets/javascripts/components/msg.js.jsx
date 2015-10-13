var Msg = React.createClass({

  render: function() {
    return (
      <div className="msg">
        <span className="username">{this.props.message.user.username}:</span> {this.props.message.created_at.toLocaleString()}
        <br></br> {this.props.message.text}
      </div>
)
  }
});
