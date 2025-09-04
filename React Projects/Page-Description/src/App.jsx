
import './App.css'

// reusable component
function Card ({title , children})
{
  return (
    <div className='card'>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function App() {
  

  return (
    <>
      <div className='App'>
        <header>
          <h1>Welcome To My Portfolio</h1>
        </header>
      </div>
      <div className='cards-container'>
        {/* Card Component */}
        <Card title={"About Me"}>
          <p>Hi I`m Khazaal Emad - a Back-End Developer in Mosul.
            I Love Bulidings Things And learning New Technologies
          </p>
        </Card>

        <Card title={"My Hobby"}>
          <p>I Enjoy Photographer And Football And Gaming And Drawing</p>
        </Card>

        <Card title={"What I`ve Learned"}>
          <ul>
            <li>HTML Fundamentals : From Bro Code</li>
            <li>CSS Fundamentals : From Bro Code</li>
            <li>JS Fundamentals : from Bro Code </li>
          </ul>
        </Card>
      </div>

      

    </>
  )
}

export default App
