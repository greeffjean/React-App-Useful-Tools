import { Alert, ListGroup, Spinner } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import axios from "axios";


const QueryPage = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )

    const mutation = useMutation(newTodo => {
        return axios.post('/todos', newTodo)
      })

    // DOM
    return (
        <>
            <div>
                <h2>React Query in action!</h2>
                {isLoading && <Spinner animation="border" />}
                {error && <Alert variant="danger">{error as string}</Alert>}
                {data && <>
                    <h4>Payload keys: </h4>
                    <ListGroup>{
                        Object.keys(data).map(k => {
                            return <ListGroup.Item key={k}>{k}</ListGroup.Item>
                        })}
                    </ListGroup>
                </>
                }
            </div>

            <div className={"mt-4"}>
                <h4>Lets use mutations!</h4>
               
            </div>
        </>
    )
}



export default QueryPage