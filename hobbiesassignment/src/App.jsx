

import Card from 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card
    title="Card Title"
    description="This is a description of the card."
    imageURL="https://tse2.mm.bing.net/th/id/OIP.cSPlDEMYk1y8zqFvpe79bAHaE8?pid=Api&P=0&h=180"
    />
    <Card
    title="Card Title"
   description="This is a description of the card." 
   imageUrl="https://tse1.mm.bing.net/th/id/OIP.jVe7dJWKHTJmXzA12_4d8gHaDt?pid=Api&P=0&h=180"
   />
    <Card
    title="Card Title"
   description="This is a description of the card." 
   imageUrl="https://tse2.mm.bing.net/th/id/OIP.SEoO9thQz7kEZtYHgKkvSgHaE8?pid=Api&P=0&h=180"/>
    </>
  )
}

export default App
