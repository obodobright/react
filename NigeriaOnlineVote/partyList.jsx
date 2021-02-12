import React from 'react'
import PartyVote from './PartyVote'
import VoteBooth from './politicalParties'
import './party.css'


class PartyList extends React.Component{
    constructor(props){
super(props)
    this.state={ 
        votebooth : []
     }

}
componentDidMount(){
    this.setState({
        votebooth : VoteBooth
    })
}
Voted =(voteId)=>{
   const nextVoted = this.state.votebooth.map((vote)=>{
        if(vote.id===voteId){
            return Object.assign({}, vote, {
                votes : vote.votes + 1
            })
        }
        else {
            return vote
        }
    })
    this.setState({
        votebooth : nextVoted
    })
}

setComplete=(id)=>{
    this.setState({
        votebooth : this.state.votebooth.map((vote) =>{
            if(vote.id === id){
                vote.isVoted = !vote.isVoted
            }
          return vote
        })
    })
}

render() {
    this.state.votebooth.sort((a,b)=> (b.votes - a.votes))
    const voteList = this.state.votebooth.map(vote => <PartyVote key={vote.id} id={vote.id} candidateName={vote.candidateName} officePosition={vote.officePosition} votes={vote.votes} isVoted={vote.isVoted} partyLogo={vote.partyLogo} voted={this.Voted} setComplete={this.setComplete}/>)
    return(
        <section>
        <div>
            <h1>Nigeria Online Presidential voting system</h1>
          {voteList}  
        </div>
        </section>
    )
}
}
export default PartyList





