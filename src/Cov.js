import React from 'react'

import {Cards, Chart, CountryPicker} from './components2'
import styles from './Cov.module.css'
import {fetchData} from './api'

import image from './images/image.png';

class Cov extends React.Component {

    state = {
        data: {},
        country: ''
    }
   
    async componentDidMount() {
        const fetch = await fetchData()

        this.setState({data: fetch})
    }

    handleCountryChanged = async (country) => {
        /* if(country ===  'global'){
            const fetch = await fetchData()
            this.setState({data: fetch, country: 'Global'})
        } else {
            const fetch = await fetchData(country)
            this.setState({data: fetch, country: country})
        } */
        const fetch = await fetchData(country)
        this.setState({data: fetch, country: country})
    }

    render() {
        const {data, country} = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChanged={this.handleCountryChanged} />
                <Chart data={data} country={country} />
                
            </div>
        )
    }
}

export default Cov