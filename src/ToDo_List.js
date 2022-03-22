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
}

