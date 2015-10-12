var TopLevel = React.createClass({


 getInitialState(){

    return{
       chatRooms: []
    }
   },


   fetchChatRooms(){
   var component = this;

   fetch("/api/chatrooms").then(function(response){
     response.json().then(function(data){
       component.setState({chatRooms: data.chatRooms});
     });
   });
 },

 componentDidMount(){
     this.fetchChatRooms();
   },

 render() {
     return <div className="container">
     <div className="row">

          <div className="col-md-2">
           <div className="vleft">
             <ul className="list-group">
       {this.state.chatRooms.map(function(chatRooms){
         return <li className="list-group-item">{chatRooms.roomname}</li>
       })}
       </ul>
     </div>
     </div>
     <ChatBox />
     </div>
     </div>;
   }
});
