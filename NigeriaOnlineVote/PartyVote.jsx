import React, { Component } from 'react';


class PartyVote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

onVote =()=>{
    return {
        padding: this.props.isVoted ? '0.5em': 'initial',
        background: this.props.isVoted ? 'green': 'initial',
        cursor:'pointer',
        fontStyle : 'italic',
        textDecoration:'underline',
        color:'blue'
    }
}
handleUpVote = () =>{
this.props.voted(this.props.id)
}


    render() { 
        const {partyLogo,candidateName,id,officePosition,votes} = this.props
        return ( 
            
          <React.Fragment>
              <div className="vote-content">
                    <div>
                        <img src={partyLogo} alt={candidateName} width="90" height="85"/>
                    </div>
                    <div className="vote-info">
                        <span style={this.onVote()} onClick={this.handleUpVote} onChange={this.props.setComplete.bind(this, id)}>VoteHere</span> {''} <span>{votes}</span>
                        <h3>{candidateName}</h3>
                        <p> Office: {officePosition}</p>
                    </div>
              </div>
          </React.Fragment>
         );
    }
}
 
export default PartyVote;