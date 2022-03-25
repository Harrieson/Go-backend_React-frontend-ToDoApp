import React, {Component} from 'react'
import axios from 'axios'
import {Card, Header, Form, Input, Icon} from 'semantic-ui-react'


let endpoint = 'http://localhost:3000'

class ToDo_list extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task:'',
            items:[],
        };
    }
    // eslint-disable-next-line react/no-typos
    ComponentDidMount(){
    this.GetTask();
    };

    render() {
        return (
            <div>
                <div className='row'>
                    <Header className='header' as='h2' color='blue'>
                        ToDo_list
                    </Header>
                </div>
                <div className='row'>
                    <Form onSubmit={this.onSubmit}>
                        <Input
                            type='text'
                            name='task'
                            onChange={this.onChange}
                            value={this.state.task}
                            fluid
                            placeholder='Create Task' />
                    </Form>
                </div>
            </div>
        )
    }
}

export default ToDo_list