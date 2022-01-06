import { Counter } from "./Counter";
import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform2';
const repository = {
    name: 'name',
    description: 'Forms in React2',
    link: 'https://github.com/unform/unform'
}
export function RepositoryList() {
    return (
        <section className="repository-list">
      <h1>Lista de repositorios</h1>      
      <ul>
         
        <RepositoryItem respository={repository}/>
        <RepositoryItem respository={repository}/>
        <RepositoryItem respository={repository}/>
        
      </ul>
        </section>
    );
}