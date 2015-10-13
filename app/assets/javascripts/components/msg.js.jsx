var Msg = React.createClass({

  render: function() {
    return (
      <div className="msg">                                                    
        <span className="username">{this.props.message.user.username}:</span> {moment(this.props.message.created_at).fromNow()}
        <br></br> {this.props.message.text}
      </div>
)
  }
});
