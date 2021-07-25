import Link from 'next/link'
import Card from '../components/Card/Card';
import Header from '../components/Header/Header'

export default function Home({users}) {
  return (
    <div>
      <Header/>
      <div className="page-content">
        <div className='cards'>
          {users.map(user => (
              <Card key={user.id} user={user}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export async function getStaticProps(contenxt) {
  const res = await fetch('https://www.breakingbadapi.com/api/characters');
  const users = await res.json();

  return {
    props : {users}
  }
}
