import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { Container, Grow, Grid } from '@material-ui/core';

const Home = () => {
    const [ currentId, setCurrentId ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return ( 
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}></Posts>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
                </Grid>
            </Grid>
        </Container>
    </Grow>
     );
}
 
export default Home;