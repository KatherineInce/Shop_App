import React, { Component } from 'react'

const styles = {
    div1:{
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    div2:{
        width: '80%',
    }
}

export class Layout extends Component {
  render() {
    return (
      <div style={styles.div1}>
        <div style={styles.div2}>
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout