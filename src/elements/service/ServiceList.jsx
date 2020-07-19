import React ,{ Component }from "react";
import { FiCast , FiLayers , FiGitPullRequest , FiMonitor, FiCloud, FiShare, FiBookmark } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Web Design & Development',
        description: 'Our talented team of developers & designers will build an amazingly responsive and professional website. That is secure; user-friendly and fast.'
    },
    {
        icon: <FiLayers />,
        title: 'E-Commerce',
        description: 'We can develop your online shop using an e-commerce platform like Shopify, or we can custom built from scratch, and we can also help manage it.'
    },
    {
        icon: <FiCloud />,
        title: 'DevOps and Infrastructure',
        description: "We use a combination of practices and tools that will increase your organisation's ability to deliver applications and services at high velocity."
    },
    { 
        icon: <FiShare />,
        title: 'QA & Testing',
        description: 'Automated Testing (Java, Selenium & TestNG) | Manual Testing - Functional | Manual Testing - UAT | Manual Testing- UI/UX'
    },
    {
        icon: <FiGitPullRequest />,
        title: 'Security',
        description: 'Penetration Tests | Security Audit | Vulnerability Scanning | Risk Assessment | Security Scanning'
    },
    { 
        icon: <FiBookmark />,
        title: 'SEO',
        description: 'Effective search engine optimisation. Increasing the visibility of your business in search engines and Google. Let your customers find you.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
