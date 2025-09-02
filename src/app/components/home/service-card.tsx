export function ServiceCard({ service }) {
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                    <li>{service.features}</li>
                </ul>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Saber más</button>
                </div>
            </div>
        </div>
    );
}
