import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component { 
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){ // sempre que o componente vai ser exibido ele ja preenche a lisa
        this.props.search()
    }

    keyHandler(e){
        const { add, clear, search, description } = this.props; // extrair do props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render(){
        const { add, search, description } = this.props; // extrair do props
        return (
            <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                {/* <div className='col-xs-12 col-sm-9 col-md-10'> */}
                <input id='description' className='form-control' placeholder='Adicione uma tarefa' value={this.props.description} onChange={this.props.changeDescription} onKeyUp={this.keyHandler} type="text" />
                {/* </div> */}
            </Grid>
            <Grid cols='12 3 2'>
                {/* <button className='btn btn-primary'>
                    <i className='fa fa-plus'></i> */}
                <IconButton style='primary' icon='plus' onClick={() => add(description)}></IconButton>
                <IconButton style='info' icon='search' onClick={search}></IconButton>
                <IconButton style='default' icon='close' onClick={this.props.clear}></IconButton>
                {/* </button> */}
            </Grid>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
});

const mapDispatchToProps = dispatch =>
  bindActionCreators( { add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)