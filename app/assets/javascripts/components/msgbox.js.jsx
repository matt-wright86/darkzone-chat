var Msgbox = React.createClass({

  handleButtonClick(){
    var component = this;
    var theText = this.refs.text.getDOMNode().value;

    var messageJSON = {
      message: {
        text: theText
      }
    }

    $.post("/api/chatrooms/" + this.props.chatroom.id + "/messages.json", messageJSON).then(function(json){
      component.refs.text.getDOMNode().value = "";
      window.location = window.location;
    });
  },

  render: function() {
    return <div className="msgbox ">
      <input type="text" ref="text"></input>
      <button onClick={this.handleButtonClick}>Submit</button>
    </div>;
  }
});
