import React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {addReminder} from '../../store/Reminder';
class RemidnerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onChange = this.onChange.bind(this);        
        this.onAddReminder = this.onAddReminder.bind(this);        
    }

    onChange(evt){
        this.setState({text: evt.target.value});
    }

    onAddReminder(evt){
        this.props.addReminder(this.state.text);
    }
    render() {
        console.log('this.props',this.props)
        return (
            <div className='form-inline'>
                <div className='form-group'>
                    <input className='form-control' placeholder='I have to...'  onChange={this.onChange}/>
                </div>
                <button type='button' className='btn btn-success' onClick={this.onAddReminder}>Remind Me!</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        remindersReducer:state.remindersReducer
    }
}

function mapDispatchToProps(dispatch){
    return Redux.bindActionCreators({addReminder}, dispatch)
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(RemidnerForm);