import News from '../models/news'

const NEWS = [
    new News(
        'n1',
        'Sunday Saanu',
        'current',
        'UI: Assesing Adewole’s Two Years in Office',
        `https://www.ui.edu.ng/content/ui-assessing-adewole%e2%80%99s-two-years-office`
    ),
    new News(
        'n2',
        'Sunday Saanu',
        'current',
        'UI at 64: Prospects and Challenges',
        `https://www.ui.edu.ng/content/ui-64-prospects-and-challenges`
    ),
    new News(
        'n3',
        null,
        'current',
        'Life of Staff and Students is precious in the UI',
        `https://www.ui.edu.ng/content/life-staff-and-students-precious-ui`
    ),
    new News(
        'n4',
        null,
        'current',
        'UI Sexual Harassment Policy now online',
        `https://www.ui.edu.ng/sites/default/files/SEXUAL%20HASSASSMENT%20HANDOUT%20DOMMY.pdf`
    ),
    new News(
        'n5',
        null,
        'current',
        'Schedule of Levies for 2012/2013 Academic Session',
        `https://www.ui.edu.ng/sites/default/files/2012-2013%20Schedule%20of%20Levies.pdf`
    ),   
    new News(
        'n6',
        null,
        'current',
        'UI Gender Policy now online',
        `https://www.ui.edu.ng/sites/default/files/GENDER%20POLICY%20DOMMY.pdf`
    ),    
    new News(
        'n7',
        null,
        'current',
        'Call For Book Chapter/Article',
        `https://www.ui.edu.ng/content/call-book-chapterarticle`
    ),   
    new News(
        'n8',
        null,
        'current',
        '013 Bi-annual International Religious Studies Conference',
        `https://www.ui.edu.ng/content/2013-bi-annual-international-religious-studies-conference`
    ),   
    new News(
        'n9',
        null,
        'current',
        'Emerald/AABS Case Study Competition',
        `https://www.ui.edu.ng/content/emeraldaabs-case-study-competition`
    ),
    new News(
        'n10',
        null,
        'current',
        'Gender and Higher Education in Africa',
        `https://www.ui.edu.ng/content/gender-and-higher-education-africa-emerging-issues`
    ),
    new News(
        'n11',
        null,
        'archive',
        'PTDF professional Chair in Petroleum Engineering',
        `https://www.ui.edu.ng/content/ptdf-professorial-chair-petroleum-engineering`
    ),
    new News(
        'n12',
        null,
        'archive',
        'Shell Professorial Chair in Petroleum Engineering',
        `https://www.ui.edu.ng/content/shell-professorial-chair-petroleum-engineering`
    ),
    new News(
        'n13',
        null,
        'archive',
        'An Evaluation of UI POST-UTME Model',
        `https://www.ui.edu.ng/content/evaluation-ui-post-utme-model`
    ),
    new News(
        'n14',
        null,
        'archive',
        '2012/2013 Post-UTME:UI Restricts Movement of Vehicles and Motorcycles on Campus',
        `https://www.ui.edu.ng/content/press-release`
    ),
    new News(
        'n15',
        null,
        'archive',
        'UI Student Announced as the Star GOOGLE Student Ambassador in Sub-Saharan Africa',
        `https://www.ui.edu.ng/content/ui-student-announced-star-google-student-ambassador-sub-saharan-africa`
    ),
    new News(
        'n16',
        null,
        'archive',
        'UI gets Geoscience Workstation support from Exxonmobil',
        `https://www.ui.edu.ng/content/ui-gets-geoscience-workstation-support-exxonmobil`
    ),
    new News(
        'n17',
        null,
        'archive',
        'Mobil Producing Nigeria Unlimited Donates Personal Computers to UI Staff and Students',
        `https://www.ui.edu.ng/content/mobil-producing-nigeria-unlimited-donates-personal-computers-ui-staff-and-students`
    ),
    new News(
        'n18',
        null,
        'archive',
        'UI PUSHES FOR VIBRANT STUDENTS’ UNIONISM',
        `https://www.ui.edu.ng/content/ui-pushes-vibrant-students%E2%80%99-unionism`
    ),
    new News(
        'n19',
        null,
        'archive',
        'UI celebrates 50 years of Agricultural Biology in Nigeria',
        `https://www.ui.edu.ng/content/ui-celebrates-50-years-agricultural-biology-nigeria`
    ),
    new News(
        'n20',
        null,
        'archive',
        'UI allays DLC Students’ fears on the NUC suspension of Part-Time Programmes',
        `https://www.ui.edu.ng/content/ui-allays-dlc-students%E2%80%99-fears-nuc-suspension-part-time-programmes`
    ),
    new News(
        'n21',
        null,
        'archive',
        'Master of Science Programme in Child & Adolescent Mental Health commences in C-CAMH',
        `https://www.ui.edu.ng/content/centre-child-and-adolescent-mental-health`
    ),
    new News(
        'n23',
        null,
        'archive',
        'CPEEL introduces new Post-graduate Programmes',
        `https://www.ui.edu.ng/content/post-%E2%80%93-graduate-school`
    ),
    new News(
        'n24',
        null,
        'archive',
        'A Book in Honour of Late Professor M.A.L Omole',
        `https://www.ui.edu.ng/content/book-honour-late-professor-mal-omole`
    ),
    new News(
        'n25',
        null,
        'archive',
        'A Book in Honour of Late Professor J.T Okedara',
        `https://www.ui.edu.ng/content/book-honour-late-professor-jt-okedara`
    ),
    new News(
        'n26',
        null,
        'archive',
        '63 Anniversary Book Project',
        `https://www.ui.edu.ng/content/63-anniversary-book-project-0`
    ),
    new News(
        'n27',
        null,
        'archive',
        'Essay in Honour of Professor E. Osuji',
        `https://www.ui.edu.ng/content/essay-honour-professor-e-osuji`
    ),
    new News(
        'n28',
        null,
        'archive',
        'Volkswagen Foundation Fellowship in Humanities',
        `https://www.ui.edu.ng/sites/default/files/VOLKSWAGEN%20FOUNDATION%20FELLOWSHIP%20IN%20HUMANITIES.pdf`
    ),
    new News(
        'n29',
        null,
        'archive',
        'Sustainable Development Policy Dialogue',
        `https://www.ui.edu.ng/content/sustainable-development-policy-dialogue`
    ),
    new News(
        'n30',
        null,
        'archive',
        'Orientation Workshop for the new Student Leadership',
        `https://www.ui.edu.ng/content/orientation-workshop-new-student-leadership`
    ),
    new News(
        'n31',
        null,
        'archive',
        'Hiring of new Academic Staff',
        `https://www.ui.edu.ng/hiring_of_newacademic_staff`
    ),
    new News(
        'n32',
        null,
        'archive',
        'Doctor of Philosophy(PhD) Degree Scholarships in infectious Diseases of Poverty.',
        `https://www.ui.edu.ng/content/four-4-doctor-philosophy-phd-degree-scholarships-infectious-diseases-poverty-ecowas-students`
    ),
    new News(
        'n33',
        null,
        'archive',
        'Fellowship competitions',
        'https://www.ui.edu.ng/content/announcement'
    ),
    new News(
        'n34',
        null,
        'archive',
        'Workshop on International Research',
        'http://ui.edu.ng/content/workshop-international-research'
    ),
    new News(
        'n35',
        null,
        'archive',
        'Further Review of Academic Calender for the 2011/2012 SESSION',
        'https://www.ui.edu.ng/content/further-review-academic-calendar-20112012-session'
    ),
    new News(
        'n36',
        null,
        'archive',
        'Situation Report: Provision of Utilities on the Campus and Resumption from Break',
        'http://ui.edu.ng/sites/default/files/2205122889_0.pdf'
    ),
    new News(
        'n37',
        null,
        'archive',
        'UI Appoints Acting Registrar',
        'https://www.ui.edu.ng/newregistrar'
    ),
    new News(
        'n38',
        null,
        'archive',
        'Admission into Undergraduate (100 and 200 Levels) Degree Programmes in the Distance Learning Centre, University of Ibadan for the 2011/2012 Academic Session',
        'http://ui.edu.ng/advert2011_2012'
    ),
    new News(
        'n39',
        null,
        'archive',
        'UI hosts four Chinese Students on a six-month Bilateral exchange programme',
        'http://ui.edu.ng/chinese-students'
    ),
    new News(
        'n40',
        null,
        'archive',
        'UI Shines in Ethiopia as Pan African University take off',
        'http://ui.edu.ng/ui_shines_in_ethiopias'
    ),
    new News(
        'n41',
        null,
        'archive',
        '3rd Biennial Conference of Forests and Forest Products (Ibadan 2012)',
        'http://ui.edu.ng/forest_products_2011'
    ),
    new News(
        'n42',
        null,
        'archive',
        'Otunba Tunwase National Paediatric Centre Handed Over to the University of Ibadan.',
        'http://ui.edu.ng/nationalpaediatriccentre'
    ),
    new News(
        'n43',
        null,
        'archive',
        'UI Get Gigantic Donation from Otunba Balogun',
        'http://ui.edu.ng/ui_gets_donation'
    ),
    new News(
        'n44',
        null,
        'archive',
        'UI hosts four Chinese Students on a six-month Bilateral exchange programme',
        'http://ui.edu.ng/chinese-students'
    ),
    new News(
        'n45',
        null,
        'archive',
        '2011/2012 Registration Procedure for New Students',
        'http://ui.edu.ng/registrationprocedure'
    ),
    new News(
        'n46',
        null,
        'archive',
        'Giraffe: A new specie of Animal in the University of Ibadan Zoo',
        'http://ui.edu.ng/giraffe'
    ),
    new News(
        'n47',
        null,
        'archive',
        'Tribute to UI VC, at 57',
        'http://ui.edu.ng/tributetouivc'
    ),
    new News(
        'n48',
        null,
        'archive',
        'Towards curbing the menace of cultism',
        'https://www.ui.edu.ng/anticultism'
    ),
    new News(
        'n49',
        null,
        'archive',
        'Disecting UI VC',
        'http://ui.edu.ng/disecting'
    ),
    new News(
        'n50',
        null,
        'archive',
        'Vistation panel calls on olubadane',
        'http://ui.edu.ng/panelvisit'
    ),
    new News(
        'n51',
        null,
        'archive',
        'We want Olubadan Hall UI',
        'http://ui.edu.ng/olubadanhall'
    ),
    new News(
        'n52',
        null,
        'archive',
        'Support me to Uplift UI',
        'https://www.ui.edu.ng/supportme'
    ),
    new News(
        'n53',
        null,
        'archive',
        'Remember your Alma Mater',
        'https://www.ui.edu.ng/almamater'
    ),
    new News(
        'n54',
        null,
        'archive',
        'Scholarship Opportunity',
        'https://www.ui.edu.ng/nucphd'
    ),
    new News(
        'n55',
        null,
        'archive',
        'Open Call Announcement for Hewlett/IIE Fellowship in Population, Reproductive Health, and Economic Development',
        'https://www.ui.edu.ng/hewlet'
    ),
    new News(
        'n56',
        null,
        'archive',
        'New Vice Chancellor Assumes Duty',
        'https://www.ui.edu.ng/newvcresumes'
    ),
    new News(
        'n57',
        null,
        'archive',
        'UI admission not for sale, but for the best',
        'https://www.ui.edu.ng/admissionnotforsale'
    ),
    new News(
        'n58',
        null,
        'archive',
        'UI: New VC, fresh expectations',
        'http://ui.edu.ng/newVC'
    ),
    new News(
        'n59',
        null,
        'archive',
        `Post-mortem of UI's averted religious riot`,
        'http://ui.edu.ng/religiousriot'
    ),
    new News(
        'n60',
        null,
        'archive',
        `Why Post-UME test must stay`,
        'http://ui.edu.ng/postume'
    ),
    new News(
        'n61',
        null,
        'archive',
        `How UI won PAU's hub for W/Africa`,
        'http://ui.edu.ng/PAU'
    )
]

export default NEWS