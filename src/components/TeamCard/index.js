import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem

  return (
    <li className="each-item-container">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageUrl} alt={name} className="logo-img" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
