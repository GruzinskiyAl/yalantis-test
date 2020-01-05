import React from 'react'
import axios from 'axios'
import Month from './Month'

const URL = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

export default class MonthList extends React.Component {
    state = {
        months: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        users: []
    }

    componentDidMount() {
        axios.get(URL).then(res => {
            this.setState({ users: res.data });
        })
    }

    render() {
        return (
            <div className='d-flex flex-wrap justify-content-between m-3'>
                {this.state.months.map((el, i) => {
                    return (
                        <Month
                            key={i + 1}
                            name={el}
                            users={this.state.users.filter(el => {
                                return new Date(el.dob).getMonth() === i + 1
                            })}
                        />
                    )
                })}
            </div>
        )
    }
}