import React from 'react'

export default class Widget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            crate: null
        }
    }
    async componentDidMount() {
        let res = await import('@widgetbot/crate')
        const Crate = await res.cdn();

        const myCrate = new Crate({
            server:"806550877439131660",
            channel:"806571996485386240"
        })

        this.setState({ crate: myCrate })
    }

    render() {
        return this.state.crate
    }
}