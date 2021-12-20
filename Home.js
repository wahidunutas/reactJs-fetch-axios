import React from "react";
import { Container, Card, Grid } from 'semantic-ui-react';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        data: [],
       
    }}
    componentDidMount() {
        axios.get('http://127.0.0.1/phpArray/data.php')
            .then(res => 
        {
          this.setState({data: res.data});
        
        }); 
    }
    

    render() {
        return (
            <Container>
                <Grid columns='three' >
                    <Grid.Row>
                        {this.state.data.map((result) => {
                            return (
                                <Grid.Column>
                                    <Card
                                        header={result.judul}
                                        meta={result.penulis}
                                    />
                                </Grid.Column>
                            )
                        })}
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}



export default Home;