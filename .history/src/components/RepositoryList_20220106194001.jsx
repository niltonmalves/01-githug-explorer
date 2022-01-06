import { Counter } from "./Counter";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";
import { response } from "express";

const repositoryName = 'unform2';
const repository = {
    name: 'name',
    description: 'Forms in React2',
    link: 'https://github.com/unform/unform'
}
export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    

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