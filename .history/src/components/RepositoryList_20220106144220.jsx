import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform2';

export function RepositoryList() {
    return (
        <section className="repository-list">
      <h1>Lista de repositorios</h1>      
      <ul>
         
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