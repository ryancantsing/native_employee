import _ from 'lodash';
import React, {Component} from 'react';
import { connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm} from './common';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';

class EmployeeEdit extends Component {
    state = {showModal: false}
    componentWillMount(){
        _.each(this.props.employee, (value, prop)=>{
            this.props.employeeUpdate({prop, value});
        });
    }
    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
    }
    onTextPress(){
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }
    onAcceptConfirm(){
        this.props.employeeDelete({uid: this.props.employee.uid});
    }
    onDeclineConfirm(){
        this.setState({ showModal: false});
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                    Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAcceptConfirm.bind(this)}
                    onDecline={this.onDeclineConfirm.bind(this)}
                    >
                    Are you sure you want to fire this person?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift}
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);