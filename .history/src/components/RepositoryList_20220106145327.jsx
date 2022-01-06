import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform2';
const repository = {
    name: 'name',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}
export function RepositoryList() {
    return (
        <section className="repository-list">
      <h1>Lista de repositorios</h1>      
      <ul>
         
        <RepositoryItem 
        respository={repository}/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
          <li>
              <strong>unform</strong>
              <p>Forms in React</p>
              <a href="">
                  acessar repositorio
              </a>
          </li>
          <li>
              <strong>unform</strong>
              <p>Forms in React</p>
              <a href="">
                  acessar repositorio
              </a>
          </li>
      </ul>
        </section>
    );
}