import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headsImageUrl,
    headsCount: 0,
    tailsCount: 0,
    totalCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount, totalCount} = this.state

    const tossResult = Math.floor(Math.random() * 2)
    let newHeadsCount = headsCount
    let newTailsCount = tailsCount
    let newTossImage = headsImageUrl

    if (tossResult === 0) {
      // Heads
      newHeadsCount += 1
      newTossImage = headsImageUrl
    } else {
      // Tails
      newTailsCount += 1
      newTossImage = tailsImageUrl
    }

    this.setState({
      tossResultImage: newTossImage,
      headsCount: newHeadsCount,
      tailsCount: newTailsCount,
      totalCount: totalCount + 1,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount, totalCount} = this.state

    return (
      <div className="coin-toss-bg-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-image" />
          <button type="button" className="toss-btn" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score">Total: {totalCount}</p>
            <p className="score">Heads: {headsCount}</p>
            <p className="score">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
