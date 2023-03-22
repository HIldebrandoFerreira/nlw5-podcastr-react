chamada usando SPA:

  useEffect(() => {
    fetch("http://localhost:3333/episodes")
    .then(response => response.json())
    .then(data => console.log(data))
  }, []

Chamada usando SSR:

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3333/episodes")
  const data = await response.json()
  return {
    props: {
      episodes: data,
    }
  }
}


Chamada usando SSG:

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes")
  const data = await response.json()
  return {
    props: {
      episodes: data,
    }
  }
}








interface EpisodesProps {
  episodes: [{
    id: string
    title: string
    members: string
    published_at: string
    thumbnail: string
    description: string
    file: {
      url: string
      type: string
      duration: BigInteger
    } 
  }]
}