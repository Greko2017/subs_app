import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Header } from './Header'

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container className="main_container" fluid="md">
                    {React.cloneElement(this.props.children)}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

