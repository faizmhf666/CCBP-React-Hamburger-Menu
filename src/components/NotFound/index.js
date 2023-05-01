import Header from '../Header'
import './index.css'

const NotFound = () => {
  const stringVal =
    'Sorry, we cannot find that page. You will find lots to explore on the home page'
  return (
    <div>
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1>Lost Your Way?</h1>
      <p>{stringVal}</p>
    </div>
  )
}

export default NotFound
