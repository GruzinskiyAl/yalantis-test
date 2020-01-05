import React from 'react'
import '../style/month.css'

export default class Month extends React.Component {
    getColor = () => {
        const usersLength = this.props.users.length;
        if (0 <= usersLength && usersLength <= 2) {
            return '#B4B4B4'
        } else if (3 <= usersLength && usersLength <= 6) {
            return '#3BBCFF'
        } else if (7 <= usersLength && usersLength <= 10) {
            return '#69F271'
        } else {
            return '#FF6F6F'
        }
    }

    render() {
        const monthStyle = {
            backgroundColor: this.getColor(),
        }
        return (
            <div className='month-card-wrap'>
                <div className='month-card'>
                    <div
                        className='month-card-front'
                        style={monthStyle}
                    >
                        {this.props.name}
                    </div>
                    <div
                        style={monthStyle}
                        className='month-card-back'
                    >
                        {this.props.users.map(el => {
                            return (
                                <p key={el.id}>{el.firstName} {el.lastName}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
};
