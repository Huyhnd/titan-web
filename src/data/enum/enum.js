import imgService1 from '../image/images/service1.png'
import imgService2 from '../image/images/service2.png'
import imgService3 from '../image/images/service3.png'

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

export default {
    topSliderConfig,
    headerConfig,
    bodyTitleConfig,
    bodyContentConfig
}
