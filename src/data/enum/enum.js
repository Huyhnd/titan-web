import imgService1 from '../image/images/service1.png'
import imgService2 from '../image/images/service2.png'
import imgService3 from '../image/images/service3.png'
import domainImg1 from '../image/images/mobile.png'
import domainImg2 from '../image/images/web.png'
import domainImg3 from '../image/images/desktop.png'
import domainImg4 from '../image/images/cloud.png'
import domainImg5 from '../image/images/network.png'
import domainImg6 from '../image/images/testing.png'
import domainImg7 from '../image/images/blockchain.png'
import domainImg8 from '../image/images/ai.png'
import domainImg9 from '../image/images/crm.png'


const headerConfig = [
    {
        key: "home",
        url: "/#",
        id: "",
        text: "Home"
    },
    {
        key: "language",
        url: "/#",
        id: "link-change-language",
        text: "日本"
    }
]

const topSliderConfig = [
    {
        key: "item1",
        title: "Inspire",
        title2: "Innovations",
        describe: "Founded on trust and experience, by a professional team, with a big vision and mission to provide the best services to our clients."
    },
    {
        key: "item2",
        title: "Comprehensive",
        title2: "Your Work",
        describe: "A dedicated and professional team that offers a wide range of advanced solution for offshore software testing and comprehensive development services."
    },
    {
        key: "item3",
        title: "Advanced Solution",
        title2: "for Innovations",
        describe: "Always hunger for new idea creation, we incubate good ideas by providing facilities for product development and environment where creativity leverages our skills and services."
    },
    {
        key: "item4",
        title: "\"Inspire\"",
        title2: "working environment",
        describe: "Our friendly, challenging, and collaborative environment creates enjoy valuable benefits and sharing ownership."
    }
]

const bodyTitleConfig = [
    {
        key: "body-title-1",
        url: "/#",
        title: "We provide",
        describe: "Professional and trusted services with cost-effective and exceptional expertise to deal with any complexities in scalable projects"
    },
]


const bodyContentConfig = [
    {
        key: "body-content-1",
        image: imgService1,
        contentTitle: "Software Development",
        contentDescribe: "Develop software applications from business ideas to deployment, develop based on product definition, the initial designs, or develop modules with multiple teams for concurrent development thus reducing time to market."
    },
    {
        key: "body-content-2",
        image: imgService2,
        contentTitle: "Maintenance and support",
        contentDescribe: "Maintain, enhance, and develop new features of existing software applications. We also provide services to migrate from the legacy systems to new technologies to help improve performance and add benefits to the client's businesses."
    },
    {
        key: "body-content-3",
        image: imgService3,
        contentTitle: "Software Testing",
        contentDescribe: "Provide all kind of testing services including automation tool development, enhancement and execution to assure the quality of our client’s products."
    },
]

const domainTitleConfig = [
    {
        key: "domain-title-1",
        url: "/#",
        title: "Domains & Technologies",
        describe: ""
    },
]

const domainContentConfig = [
    {
        key: "domain-content-1",
        image: domainImg1,
        contentTitle: "Mobile Development",
        contentDescribe: "We have expertise in building mobile applications and mobile games on multiple platforms"
    },
    {
        key: "domain-content-2",
        image: domainImg2,
        contentTitle: "Web App Development",
        contentDescribe: "Our teams understand how to build web applications with insight UX/UI that help to strengthen the client businesses and brand awareness from the bottom-line"
    },
    {
        key: "domain-content-3",
        image: domainImg3,
        contentTitle: "Desktop Development",
        contentDescribe: "We develop cross-platform standalone and client-server applications which run stability scalable, and also easy to convert to other architects or business models"
    },
    {
        key: "domain-content-4",
        image: domainImg4,
        contentTitle: "Cloud Based Development",
        contentDescribe: "We have extensive experience in implementation of specific PaaS and SaaS solutions"
    },
    {
        key: "domain-content-5",
        image: domainImg5,
        contentTitle: "Telecom & Networking",
        contentDescribe: "Our team has strong experience in telecom and network systems that enable us to provide both testing and development services"
    },
    {
        key: "domain-content-6",
        image: domainImg6,
        contentTitle: "Testing & Quality Assurance",
        contentDescribe: "We have well-defined process for testing projects to provide testing and quality assurance services on various domains and techniques"
    },
    {
        key: "domain-content-7",
        image: domainImg7,
        contentTitle: "Blockchain Development",
        contentDescribe: "We have experiences in setting up, configuring, and developing applications based on Block chain technologies: Ethereum, De-centralized, Smart Contract, Cryptocurrency"
    },
    {
        key: "domain-content-8",
        image: domainImg8,
        contentTitle: "Artificial Intelligence",
        contentDescribe: "We have extensive experiences in implementation of specific solutions with AI inside: Core Machine Learning Algorithms, Unsupervised Learning, Data Preparation..."
    },
    {
        key: "domain-content-9",
        image: domainImg9,
        contentTitle: "ERP/CRM Implementation",
        contentDescribe: "Experienced team to consult and implement ERP and CRM solutions based on Microsoft and Open Source technologies (Dynamics AX/365/NAV, OpenERP(Odoo), SugarCRM, vTiger, and so on) with following services"
    },
]

const exportedObject = {
    headerConfig,
    topSliderConfig,
    bodyTitleConfig,
    bodyContentConfig,
    domainTitleConfig,
    domainContentConfig
};


export default exportedObject;