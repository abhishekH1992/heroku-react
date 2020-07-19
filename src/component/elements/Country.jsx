import React, { Component } from "react";

let TeamContent = [
    {
        images: '/assets/images/country/new-zealand.jpg',
        title: 'New Zealand',
    },
    {
        images: '/assets/images/country/tonga.jpg',
        title: 'Tonga',
    },
    {
        images: '/assets/images/country/samoa.jpg',
        title: 'Samoa',
    },
    {
        images: '/assets/images/country/fiji.jpg',
        title: 'Fiji',
    },
    {
        images: '/assets/images/country/rarotonga.jpg',
        title: 'Rarotonga',
    },
    {
        images: '/assets/images/country/tahiti.jpg',
        title: 'Tahiti',
    },
    {
        images: '/assets/images/country/png.jpg',
        title: 'PNG',
    },
    {
        images: '/assets/images/country/vanuatu.jpg',
        title: 'Vanuatu',
    }
];


class Country extends Component{
    render(){
        const {column} = this.props;
        return(
            <React.Fragment>
                {TeamContent.map((value , i ) => (
                    <div className={`${column}`} key={i}>
                        <div className="team">
                            <div className="thumbnail">
                                <img src={`${value.images}`} alt="Country Images"/>
                            </div>
                            <div className="content">
                                <h4 className="title">{value.title}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}
export default Country;