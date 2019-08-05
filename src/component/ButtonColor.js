import React from 'react'
import { connect } from "react-redux";
import * as actionFromColorAction from '../Action/colorAction/colorAction'

function ButtonColor({colorFromState, colorChangeFun}){
    return(
        <div>
            <h1 color={colorFromState}>Testing!</h1>
            <button onClick={()=>colorChangeFun()} >Primary</button>
            <h1>{colorFromState}</h1>
            {console.log("The state is:", colorFromState)}
            {console.log("----------------")}

        </div>
    );
}

const mapStateToPros = (state) =>({
    colorFromState: state.colorApiReducer.color
})

const mapStateToAction = (dispatch) =>({
    colorChangeFun : () => dispatch(actionFromColorAction.showColor())
})

export default connect(mapStateToPros, mapStateToAction)(ButtonColor)