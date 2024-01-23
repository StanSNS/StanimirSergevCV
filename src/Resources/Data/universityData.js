import basicsUniCertificateOne from "../Images/Education/SoftUniDocuments/Basics/basics.jpg"
import basicsUniCertificateTwo from "../Images/Education/SoftUniDocuments/Basics/basics1.jpg"
import basicBGFront from "../Images/Education/SoftUniDocuments/Basics/basicBGFront.jpg"
import basicBGBack from "../Images/Education/SoftUniDocuments/Basics/basicBGBack.jpg"
import basicEuFront from "../Images/Education/SoftUniDocuments/Basics/basicEUFront.jpg"
import basicEuBack from "../Images/Education/SoftUniDocuments/Basics/basicEUBack.jpg"

import fundamentalsUniCertificateOne from "../Images/Education/SoftUniDocuments/Fundamentals/fundamentals.jpg"
import fundamentalsUniCertificateTwo from "../Images/Education/SoftUniDocuments/Fundamentals/fundamentals1.jpg"
import fundamentalsUniCertificateThree from "../Images/Education/SoftUniDocuments/Fundamentals/fundamentals2.jpg"
import fundBGFront from "../Images/Education/SoftUniDocuments/Fundamentals/fundBGFront.jpg"
import fundBGBack from "../Images/Education/SoftUniDocuments/Fundamentals/fundBGBack.jpg"
import fundEuFront from "../Images/Education/SoftUniDocuments/Fundamentals/fundEUFront.jpg"
import fundEuBack from "../Images/Education/SoftUniDocuments/Fundamentals/fundEUBack.jpg"

import advancedUniCertificateOne from "../Images/Education/SoftUniDocuments/Advanced/advanced.jpg"
import advancedUniCertificateTwo from "../Images/Education/SoftUniDocuments/Advanced/advanced1.jpg"
import advBGFront from "../Images/Education/SoftUniDocuments/Advanced/advBGFront.jpg"
import advBGBack from "../Images/Education/SoftUniDocuments/Advanced/advBGBack.jpg"
import advEUFront from "../Images/Education/SoftUniDocuments/Advanced/advEUFront.jpg"
import advEUBack from "../Images/Education/SoftUniDocuments/Advanced/advEUBack.jpg"

import oopUniCertificateOne from "../Images/Education/SoftUniDocuments/Oop/oop.jpg"
import oopUniCertificateTwo from "../Images/Education/SoftUniDocuments/Oop/oop1.jpg"
import oopBGFront from "../Images/Education/SoftUniDocuments/Oop/oopBGFront.jpg"
import oopBGBack from "../Images/Education/SoftUniDocuments/Oop/oopBGBack.jpg"
import oopEUFront from "../Images/Education/SoftUniDocuments/Oop/oopEUFront.jpg"
import oopEUBack from "../Images/Education/SoftUniDocuments/Oop/oopEUBack.jpg"

import mysqlUniCertificateOne from "../Images/Education/SoftUniDocuments/Mysql/mysql.jpg"
import mysqlUniCertificateTwo from "../Images/Education/SoftUniDocuments/Mysql/mysql1.jpg"
import sqlBGFront from "../Images/Education/SoftUniDocuments/Mysql/sqlBGFront.jpg"
import sqlBGBack from "../Images/Education/SoftUniDocuments/Mysql/sqlBGBack.jpg"
import sqlEuFront from "../Images/Education/SoftUniDocuments/Mysql/sqlEUFront.jpg"
import sqlEUBack from "../Images/Education/SoftUniDocuments/Mysql/sqlEUBack.jpg"

import springDataUniCertificateOne from "../Images/Education/SoftUniDocuments/SpringData/springData.jpg"
import springDataUniCertificateTwo from "../Images/Education/SoftUniDocuments/SpringData/springData1.jpg"
import spdBGFront from "../Images/Education/SoftUniDocuments/SpringData/spdBGFront.jpg"
import spdBGBack from "../Images/Education/SoftUniDocuments/SpringData/spdBGBack.jpg"
import spdEuFront from "../Images/Education/SoftUniDocuments/SpringData/spdEUFront.jpg"
import spdEUBack from "../Images/Education/SoftUniDocuments/SpringData/spdEUBack.jpg"

import springFundUniCertificateOne from "../Images/Education/SoftUniDocuments/SpringFund/springFund.jpg"
import springFundUniCertificateTwo from "../Images/Education/SoftUniDocuments/SpringFund/springFund1.jpg"
import spfBGFront from "../Images/Education/SoftUniDocuments/SpringFund/spfBGFront.jpg"
import spfBGBack from "../Images/Education/SoftUniDocuments/SpringFund/spfBGBack.jpg"
import spfEUFront from "../Images/Education/SoftUniDocuments/SpringFund/spfEUFront.jpg"
import spfEUBack from "../Images/Education/SoftUniDocuments/SpringFund/spfEUBack.jpg"

import springAdvancedUniCertificateOne from "../Images/Education/SoftUniDocuments/SpringAdvanced/springAdv.jpg"
import springAdvancedUniCertificateTwo from "../Images/Education/SoftUniDocuments/SpringAdvanced/springAdv1.jpg"


import {FaAngular, FaCloud, FaInfinity, FaJava} from "react-icons/fa";
import {SiSpring} from "react-icons/si";
import {TbBrandMysql} from "react-icons/tb";
import {IoLogoJavascript} from "react-icons/io";

const softUniData = [
    {
        name: 'Java Basics',
        uniGrade: "6.00",
        euGrade: "5.84",
        date: "18.08.2022",
        icon: FaJava,
        fieldsOfStudy: [
            "Learn how to use the console for input and output.",
            "Understand working with conditions using if-else statements.",
            "Explore more logical checks to enhance your programming skills.",
            "Master the use of loops, especially the 'for' loop.",
            "Work with more complex loops (nested loops and while loops)."
        ],
        uniCertificates: [basicsUniCertificateOne, basicsUniCertificateTwo, basicBGFront, basicBGBack, basicEuFront, basicEuBack],
    },
    {
        name: 'Java Fundamentals',
        uniGrade: "6.00",
        euGrade: "6.00",
        date: "09.01.2023",
        icon: FaJava,
        fieldsOfStudy: [
            "Handle the standard functionality of the programming language.",
            "Understand the relationship between different IT concepts.",
            "Analyse complex problems and reduction to computer-executable steps.",
            "Work with linear data structure.",
            "Demonstrate basic skills for working with HTML and CSS."
        ],
        uniCertificates: [fundamentalsUniCertificateOne, fundamentalsUniCertificateTwo, fundamentalsUniCertificateThree, fundBGFront, fundBGBack, fundEuFront, fundEuBack],
    },
    {
        name: 'Java Advanced',
        uniGrade: "6.00",
        euGrade: "5.76",
        icon: FaJava,
        date: "09.05.2023",
        fieldsOfStudy: [
            "Creating linear data structures",
            "Applying functional programming",
            "Creating template classes",
            "Implementing basic algorithms",
            "Working with streams of data, files, and directories",
            "Working with multidimensional and associative data structures"
        ],
        uniCertificates: [advancedUniCertificateOne, advancedUniCertificateTwo, advBGFront, advBGBack, advEUFront, advEUBack],
    },
    {
        name: 'Java OOP',
        uniGrade: "6.00",
        euGrade: "6.00",
        icon: FaJava,
        date: "15.05.2023",
        fieldsOfStudy: [
            "Utilizing the object-oriented programming paradigm",
            "Encapsulation of data",
            "Using Reflection",
            "Applying the principles of object-oriented programming",
            "Creating a hierarchy of classes and inheritance",
            "Component testing"
        ],
        uniCertificates: [oopUniCertificateOne, oopUniCertificateTwo, oopBGFront, oopBGBack, oopEUFront, oopEUBack],
    },
    {
        name: 'MySQL',
        uniGrade: "6.00",
        euGrade: "6.00",
        icon: TbBrandMysql,
        date: "31.08.2023",
        fieldsOfStudy: [
            "Transaction management with precision",
            "Mastering the ACID model for robust systems",
            "Proficiently navigating databases",
            "Skillfully overseeing relations in a database",
            "Harnessing the power of procedures and functions",
            "Crafting fundamental Back-End architectures"
        ],
        uniCertificates: [mysqlUniCertificateOne, mysqlUniCertificateTwo, sqlBGFront, sqlBGBack, sqlEuFront, sqlEUBack],
    },
    {
        name: 'Spring Data',
        uniGrade: "6.00",
        euGrade: "5.84",
        icon: SiSpring,
        date: "07.09.2023",
        fieldsOfStudy: [
            "Build application architecture.",
            "Use the Database First approach.",
            "Work with databases through ORM framework.",
            "Build connections between applications and databases.",
            "Use the Code First approach.",
            "Work with XML and JSON data formats."
        ],
        uniCertificates: [springDataUniCertificateOne, springDataUniCertificateTwo, spdBGFront, spdBGBack, spdEuFront, spdEUBack],
    },
    {
        name: 'Spring Fundamentals',
        uniGrade: "6.00",
        euGrade: "5.92",
        icon: SiSpring,
        date: "10.01.2024",
        fieldsOfStudy: [
            "Generating HTML content through templates",
            "Working with cookies and sessions",
            "Working with the HTTP protocol",
            "Building web applications with the Spring MVC framework",
            "Working with fundamental principles of the Spring framework",
            "Skills and working with Bootstrap"
        ],
        uniCertificates: [springFundUniCertificateOne, springFundUniCertificateTwo, spfBGFront, spfBGBack, spfEUFront, spfEUBack],
    },
    {
        name: 'Spring Advanced',
        uniGrade: "6.00",
        euGrade: "6.00",
        icon: SiSpring,
        date: "todo",
        fieldsOfStudy: [
            "Building REST services with Spring",
            "Building architecture in Spring MVC applications",
            "Testing web applications built with Spring MVC",
            "Using authentication",
            "Deploying a Spring MVC application",
            "Building more complex web applications with the Spring framework"
        ],
        uniCertificates: [springAdvancedUniCertificateOne, springAdvancedUniCertificateTwo],
    },
    {
        name: 'JavaScript Back-End',
        uniGrade: "Expected Soon",
        euGrade: "Expected Soon",
        icon: IoLogoJavascript,
        date: "Expected Soon",
        fieldsOfStudy: [
            "Using a Web Server",
            "Working with the HTTP protocol",
            "Working with server-side applications using Node.js",
            "Working with non-relational databases",
            "Creating applications with Express and Handlebars",
            "Creating MVC architecture"
        ],
        uniCertificates: [],
    },
    {
        name: 'Angular',
        uniGrade: "Expected Soon",
        euGrade: "Expected Soon",
        icon: FaAngular,
        date: "Expected Soon",
        fieldsOfStudy: [
            "Developing client applications with Angular",
            "Building component-based applications",
            "Working with Single Page Application (SPA) concepts",
            "Working with fundamental concepts of TypeScript",
            "Working with remote REST services",
            "Working with templates and routing"
        ],
        uniCertificates: [],
    },
    {
        name: 'Containers and Clouds',
        euGrade: "Expected Soon",
        uniGrade: "Expected Soon",
        icon: FaCloud,
        date: "Expected Soon",
        fieldsOfStudy: [
            "Working with Linux Shell",
            "Configuring Docker containers",
            "Working with Docker Compose",
            "Deploying a completed project in a cloud infrastructure",
            "Preparing infrastructure through code writing",
            "Working with monitoring tools"
        ],
        uniCertificates: [],
    },
    {
        name: 'Software engineering and DevOps',
        uniGrade: "Expected Soon",
        euGrade: "Expected Soon",
        icon: FaInfinity,
        date: "Expected Soon",
        fieldsOfStudy: [
            "Working with Git and GitHub",
            "Using tools and methodologies for teamwork",
            "Creating and managing Continuous Integration processes",
            "Working with CI/CD Pipelines",
            "Creating conditions for automated testing"
        ],
        uniCertificates: [],
    },
];

export default softUniData;