import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }
  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }
  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="heading-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul className="team-list-container">
            {teamsData.map(eachTeam => (
              <TeamCard key={eachTeam.id} eachItem={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
