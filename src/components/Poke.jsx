import axios from 'axios';


const PokeResponse = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }

    const onClick =(e) =>{
        props.setNames([]);
    }

    const fetchData = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => { props.setNames([response.data.results]) })
    }

    const result = props.names[0];
    console.log(result);

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <button type="submit" className=" btn btn-primary mt-4">See Pokémon</button>
                <button type="button" onClick={onClick} className="btn btn-danger mt-4 ms-3">Clear Pokémon</button>
            </form>
            <table className="table table-dark table-hover mt-4">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {result ? result.map((names, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{names.name}</td>
                            </tr>
                        );
                    }) : console.log(null)}
                </tbody>
            </table>
        </div>
    );
}
export default PokeResponse