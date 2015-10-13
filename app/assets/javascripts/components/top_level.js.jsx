var TopLevel = React.createClass({


  getInitialState(){
     return {
       chatroom: {
         roomname: "",
         id: this.props.chatroom.id,
         messages: []
       }
     }
   },


   fetchChatRooms(){
   var component = this;

   $.getJSON("/api/chatrooms/" + this.state.chatroom.id + ".json")
      .done(function(json){
        component.setState({chatroom: json.chatroom});
      })
 },

 componentDidMount(){
     this.fetchChatRooms();

     this.messageInterval = setInterval(this.fetchChatRooms, 3000);
   },

   componentWillUnmount(){
    clearInterval(this.messageInterval);
  },


 render: function() {
     return <div className="container">

          <div className="col-md-10">
          Room: {this.state.chatroom.roomname}, {this.state.chatroom.messages.length} msgs
           <div className="vright">
        {this.state.chatroom.messages.map(function(message){
          return <Msg message={message}></Msg>
        })}
        </div>
       </div>

    <Msgbox chatroom={this.state.chatroom}></Msgbox>
     </div>;
   }
});
