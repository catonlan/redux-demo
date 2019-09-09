import React, {Component} from 'react'
import {createStore} from 'redux'
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'

class AptOne extends Component{
    render() {
        const {PayIncrease, PayDecrease} = this.props;
        return (
            <div className="App">
                <h2>当月工资为{this.props.tiger}</h2>
                <button onClick={PayIncrease}>升职加薪</button>
                <button onClick={PayDecrease}>迟到罚款</button>
            </div>
        )
    }
}

const tiger = 10000

//这是action
const increase = {
    type: '涨工资'
}

const decrease = {
    type: '扣工资'
}

// 这是 reducer

const reducer = (state= tiger, action) => {
    switch (action.type) {
        case '涨工资':
            return state += 100;
        case '扣工资':
            return state -= 100;
        default:
            return state
    }
}

// 创建store
const store = createStore(reducer)


// 需要渲染什么数据
function mapStateToProps(state) {
    return {
        tiger: state
    }
}

// 需要触发什么行为

function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => dispatch({type: '涨工资'}),
        PayDecrease: () => dispatch({type: '扣工资'}),
    }
}



ReactDOM.render(
    <Provider store={store}>
        <AptOne />
    </Provider>,
    document.getElementById('root')
)
export default AptOne = connect(mapStateToProps, mapDispatchToProps) (AptOne);