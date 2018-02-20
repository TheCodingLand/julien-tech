import React from 'react'

const classes = {
    copyright : {
        fontSize: '2em',
        color:'#ffffff',
        backgroundColor: '#999999',
        position: 'fixed',
        bottom: 0,

        }
    }



class Footer extends React.Component {
    constructor (props){
        super(props);   
    }
    render() {
        return (
            <div style={classes.copyright}>footer</div>
        )
    }    
}
export default Footer
