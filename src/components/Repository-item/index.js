export function RepositoryITem({ name, linkToRepo, path }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{path}</h4>
      <a 
      href={linkToRepo} 
      target="_blank" 
      rel="noreferrer"
      >
        Visitar Repositório
      </a>
    </div>
  )
}