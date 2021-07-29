/*!
* Start Bootstrap - Freelancer v7.0.3 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// My JavaScript

// Work Experience Modals

$('#jobArgus').on('click', () => {
    
    $("#job_Argus_Modal").modal("show");

    $(".close").click(function(){
        $("#job_Argus_Modal").modal('hide');
    });    

});

$('#jobITCS').on('click', () => {
    
    $("#job_ITCS_Modal").modal("show");

    $(".close").click(function(){
        $("#job_ITCS_Modal").modal('hide');
    });    

});

$('#jobCHC').on('click', () => {
    
    $("#job_CHC_Modal").modal("show");

    $(".close").click(function(){
        $("#job_CHC_Modal").modal('hide');
    });    

});

$('#jobCR').on('click', () => {
    
    $("#job_CR_Modal").modal("show");

    $(".close").click(function(){
        $("#job_CR_Modal").modal('hide');
    });    

});

$('#jobOGI1').on('click', () => {
    
    $("#job_OGI_Modal1").modal("show");

    $(".close").click(function(){
        $("#job_OGI_Modal1").modal('hide');
    });    

});

$('#jobOGI2').on('click', () => {
    
    $("#job_OGI_Modal2").modal("show");

    $(".close").click(function(){
        $("#job_OGI_Modal2").modal('hide');
    });    

});