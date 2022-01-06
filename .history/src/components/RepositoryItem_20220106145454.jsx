export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.respository?.name ?? 'Default'}</strong>
        <p>Forms in React</p>
        <a href="">
            acessar repositorio
        </a>
    </li>
    )
}