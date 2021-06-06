import React from 'react'
import './votingWheel.scss'

interface IProps {
    ticketId: string;
    castVote: any;
}

// 0, ½, 1, 2, 3, 5, 8, 13, 20

const VotingWheel: React.FC<IProps> = ({ ticketId, castVote }) => {

    const prepareCastVote = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const vote = e.target.innerHTML
        castVote(ticketId,vote)
        
    }
               
    return (
        <ul className="voting-wheel" onClick={prepareCastVote}>
            <li className="slice-0"><div className="text">0</div></li>
            <li className="slice-1"><div className="text">1</div></li>
            <li className="slice-2"><div className="text">2</div></li>
            <li className="slice-3"><div className="text">3</div></li>
            <li className="slice-5"><div className="text">5</div></li>
            <li className="slice-8"><div className="text">8</div></li>
            <li className="slice-13"><div className="text">13</div></li>
            <li className="slice-21"><div className="text">21</div></li>
            <li className="slice-34"><div className="text">34</div></li>
            <li className="slice-55"><div className="text">55</div></li>
            <li className="slice-89"><div className="text">89</div></li>
            <li className="slice-144"><div className="text">144</div></li>
        </ul>
    )
}

export default VotingWheel