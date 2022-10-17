import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';
 
const Users = () => {
  /*
  const [page, setPage] = useState<SpringPage<User>>();
 
  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/users',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };
 
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);
 
  return (
    <div>
      {page?.content.map((item) => (
        <>
        <p key={item.id}>{item.name}</p>
        <p key={item.id}>{item.email}</p>
        <p key={item.id}>{item.cpf}</p>
        </>
      ))}
    </div>
  );*/
  return (
    <>
    <Switch>
        <Route path="/admin/users" exact>
            <List></List>
        </Route>
        <Route path="/admin/users/:userId">
                <Form></Form>
            </Route>
    </Switch>
    </>
)
};
 
export default Users;