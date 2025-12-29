import project1 from "./Portfolio_Page_01.jpg";
import project2 from "./Portfolio_Page_02.jpg";
import project3 from "./Portfolio_Page_03.jpg";
import project4 from "./Portfolio_Page_04.jpg";
import project5 from "./Portfolio_Page_05.jpg";
import project6 from "./Portfolio_Page_06.jpg";
import project7 from "./Portfolio_Page_07.jpg";
import project8 from "./Portfolio_Page_08.jpg";
import project9 from "./Portfolio_Page_09.jpg";
import project10 from "./Portfolio_Page_10.jpg";
import project11 from "./Portfolio_Page_11.jpg";
import project12 from "./Portfolio_Page_12.jpg";
import project13 from "./Portfolio_Page_13.jpg";
import project14 from "./Portfolio_Page_14.jpg";
import project15 from "./Portfolio_Page_15.jpg";
import project16 from "./Portfolio_Page_16.jpg";
import project17 from "./Portfolio_Page_17.jpg";
import project18 from "./Portfolio_Page_18.jpg";
import project19 from "./Portfolio_Page_19.jpg";
import project20 from "./Portfolio_Page_20.jpg";
import project21 from "./Portfolio_Page_21.jpg";
import project22 from "./Portfolio_Page_22.jpg";
import project23 from "./Portfolio_Page_23.jpg";
import project24 from "./Portfolio_Page_24.jpg";

export const mywork_data = [
    {
        w_no: 1,
        images: [project1,project2,project3,project4,project5,project6,project7,project8,project9,project10,project11,project12,project13,project14,project15,project16,project17,project18,project19,project20,project21,project22,project23,project24], // Added images 2, 3, 4 to project 1
    },
    
    
    
    

    
    

    

];


// Alternative structure if you want to keep project6 and project7 as separate entries but just show them when project5 is clicked:
// Remove this if you don't want separate entries for 6 and 7

export const all_projects = [
    {
        w_no: 1,
        w_name: "web design",
        w_img: project1,
        images: [project1],
        title: "Web Design Project 1",
        description: "A modern web design project with responsive layout"
    },
    {
        w_no: 2,
        w_name: "web design",
        w_img: project2,
        images: [project2],
        title: "Web Design Project 2",
        description: "Creative web design with interactive elements"
    },
    {
        w_no: 3,
        w_name: "web design",
        w_img: project3,
        images: [project3],
        title: "Web Design Project 3",
        description: "Minimalist design with clean user interface"
    },
    {
        w_no: 4,
        w_name: "web design",
        w_img: project4,
        images: [project4],
        title: "Web Design Project 4",
        description: "Portfolio website design with dark theme"
    },
    {
        w_no: 5,
        w_name: "web design",
        w_img: project5,
        images: [project5, project6, project7],
        title: "Complete Portfolio Design",
        description: "This project includes multiple pages: 1) Main portfolio, 2) Services section, 3) Project gallery, 4) Detailed portfolio page with work experience, education, software skills, contact information, languages, and passion statements."
    },
    // If you want to keep showing project8 as separate project 6
    {
        w_no: 6,
        w_name: "web design",
        w_img: project8,
        images: [project8],
        title: "Web Design Project 6",
        description: "Additional web design project"
    }
];