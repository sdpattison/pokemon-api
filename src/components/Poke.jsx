import React from 'react';

const PokeResponse = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }

    const onClick =(e) =>{
        props.setNames([]);
    }

    const fetchData = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => {return response.json();
            }).then(response => { props.setNames([response.results]) })
    }

    const result = props.names[0];

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