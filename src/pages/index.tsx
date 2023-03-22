import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GetStaticProps } from 'next'
import { Episodes } from '../interfaces/IEpsodes'
import { api } from '../services/api'
export default function Home(props: Episodes) {
  return (
    <>
      <p>{JSON.stringify(props.episodes[0])}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps= async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc"
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {locale: ptBR}),
      duration: Number(episode.file.duration),
      description: episode.description,
      url: episode.file.url,
    }
  })
  
  return {
    props: {
      episodes: episodes,
    },
    revalidate: 60 * 60 * 8,
  }
}