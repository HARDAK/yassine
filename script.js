const content = document.getElementById('content');



// what link

const render_what = () => {
    content.innerHTML = `
    <p style="text-align: start;">

                Welcome Everyone on <span class="last">@Yassine_asserrar</span>
             </p>
             <div class="slide">
    <pre>
                .-----.
                | o o |
                | | | |
            ----|     |---- 
            |             |  
 //=========|             |========\\\\ 
            |             |
            |             |  
            </pre>
 
                 <div class="name">
                     <div>
                         Yassine <span class="last">Asserrar</span> Developper <span class="last">Full Stack</span> <img
                         class="maroc" src="./images/maroc.png" alt="maroc">
                     </div>
                     <br>
                     <hr class="hr">
                     <br>
                     <span class="last" style="display: block;">
                        <strong class="blue"><<</strong>
                        Learning How Fast Website Query ?
                        <strong class="blue">>></strong>
                     </span>
                 </div>
 
             </div>
             <br><br>
             <p class="identifier">
                 I'm Developper Full Stack For  create Web site Good By alot of Technologies <br>
                 22 years Old my nationality is morroco , and  <span class="blue">I Like Work remotly</span>  .
             </p>

        </div>

    `;
}
const btn_what = document.getElementById('what');
btn_what.addEventListener('click', render_what);



// Technologiex link 

const Technologies = [
    "HTML", "CSS", "JS", "PHP", "REACT", "LARAVEL", "PYTHON", "WORDPRESS"
]

const render_technologies = () => {
    let Tech = '<ul class="tech">';
    Technologies.map(t => {
        const img = t.toLowerCase();
        Tech += `<li> <h4> Projects Of <span class='last'>${t}</span></h4> <img src="images/${img}.png" title="${t}"></li>`;
    })
    Tech += '</ul>';
    content.innerHTML = Tech;
}

const btn_technologies = document.getElementById('technologies');
btn_technologies.addEventListener('click', render_technologies);


// projects link 
const projects = [
    {
        id: 1,
        Title: 'Create Store Ecommerce ',
        Languages: ['PHP', "JS", "HTML", "CSS"],
        images: [],
        description: 'Create This Site by Learn How Stores Ecommerces <strong>Gool Principal How work Algorithms !!</strong> ',
    },
    {
        id: 1,
        Title: 'Create Store Ecommerce ',
        Languages: ['PHP', "JS", "HTML", "CSS"],
        images: [],
        description: 'Create This Site by Learn How Stores Ecommerces <strong>Gool Principal How work Algorithms !!</strong> ',
    },
    {
        id: 1,
        Title: 'Create Store Ecommerce ',
        Languages: ['PHP', "JS", "HTML", "CSS"],
        images: [],
        description: 'Create This Site by Learn How Stores Ecommerces <strong>Gool Principal How work Algorithms !!</strong> ',
    },
    {
        id: 1,
        Title: 'Create Store Ecommerce ',
        Languages: ['PHP', "JS", "HTML", "CSS"],
        images: [],
        description: 'Create This Site by Learn How Stores Ecommerces <strong>Gool Principal How work Algorithms !!</strong> ',
    },
]




function render_projects() {
    let projects_ = '<div class="projects">';
    projects.map(p => {
        const { images, Title } = p;
        const image = images[0];
        projects_ += `<div class='project'><h1>${Title}</h1>`;
        projects_ += `<img src='./images/images_projects/${image}.png' title='${Title}'></div>`;
    })
    content.innerHTML = projects_;
}


const btn_projects = document.getElementById('projects');
btn_projects.addEventListener('click', render_projects);



function render_project(id) {
    const pr = projects.filter(p => p.id == id);
    let project = '<div class="project">';
    pr.map(p => {
        const { Title, Languages, images, description } = p
        project += `
        <h1>${Title}</h1>
        <h5>${description}</h5>  
        <ul> 
        <h2>Languages:</h2> 
        `;
        Languages.forEach(lang => {
            project += `<li>${lang}</li>`;
        });
        project += '</ul><div class="images">';
        images.forEach(img => {
            project += `<img src='./images/images_projects/${img}.png' title='${Title}'>`
        });
        project += '</div></div>';
    })

    content.innerHTML = project;
}
















// conatc link 



const render_contact = () => {
    const html = `
    <div class="contact">
            <div class="phone">
               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhASExMQFRUVGRYREBgVFRUQFRUVFRIXFhUYFRUYHSggGBomGxcVITEtJikrLzouGB81ODMtNygtLi0BCgoKDg0OFRAPFSsZFR0rLSstKysrKy03Kzc3NzctLSsrKystKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAEDBAL/xABKEAABAwICBQYGDwYHAQEAAAABAAIDBBESIQUGBzFBEyJRYXGBMjVyktHSFBUXI0JSU1RzgpGToaKzFmKjtMHCM0NjlLHh8CQl/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAQEBAAMAAAAAAAAAAAAAAAABEQISMf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBeU6ShxFnKxYhkW424gegi9121LSWPDcnEENPQSMvxWrtRqvWsu2SkqcQyeeRfIC7icQBDrnO/FBtMHA7lytUaOvnp3ARSzwuafBY98Nu1gIv2EKcavbWqyEhtSG1LOJs2KYDqc0Bru8C/SgvZFh9W9Zqatjx08gdbw2HmyMJ4Pbw7dx4FZhAREQEREBfL3gAkkADMk5AAbySvpRjaY8jRddYkXYGnsc9rXDsIJHeg8U+1PRTXFvLvdbiyKV7T5Lg2xHYuv3V9F/Ky/cTeqqSoNXqyZgkhpqiRhuGuZG5zSWktdYjfYgjuWX0LoCuge579FyzgsfGGywvLWl4sHjLeP6ndvQWt7q+i/lZfuJvVXPur6L+Vl+4m9VVJBq5XNa1p0U55GRc+OsxO6zgma2/YAk2rlc5pA0U5hO5zI6zEM+GOZzftBQW17q+i/lZfuJvVXbT7UtFvcG8u5t8rvilYweU4tsB1lUr+yGkPmVX9070LzV+r9XCwyTU1RGwEAufG5rQSbAXPSUG0rXA5jMcFyo3s4eToyguSbRNbnnk27QPsACkiAiIgIiICIiAiKB7TdezQhsEGE1EgxXdm2Jl7BxbxJIIA3ZEndYhPEWrNZrBWSvxvqqkuvcHlXtwnpa1pAb3ALYLUDWQV1HHKbcq33qoAytI0C5A4Bws4dTupBInusCTkBme5QD3XdHYiP/pLeDxGMLh0gYr27Qp7PGHNc07nAtPYRZUlUbGqxtxFPTPaMmYi+NxHC4DSAe9BYdNrHojSQETn00pdk2OdgY8kfEZKASR+6ozrVsiicHSULjG7fyUji6N3kvN3MPbcdirTWDVOspL+yIHBm7GLSxHte24bf96x6ln9Sto9RSFsc5fPT7iCcUkY6Y3HwgPinusgi0b6miqLjlIKiI2zyc2/Ajc5py6QR0q+tn2uzNIRlrgGVEYBmYNzhu5SO+9t9/QTnvBPXrdq1TaWpWSwuYZMOOlmG4g54H8cBORG8HO1xZUXQVc9DUtkaHRzQPIc12WYyex/S0i477jgg2nRY7V7S8dXTxVEfgyC9uLXDJzT1hwI7lkUBERAUW2n+K63yG/qsUpUW2oeK63yG/qsQePY54ppvLqf5uVTVQrY34ppvLqf5uVTVAREQFBts3iub6SD9dinKg22fxXN9JB+uxBlNmviyh+j/ALipKo1s18WUP0f9xUlQEREBERAREQFrPtAqzLpKueScpTEL8BEBGAOgc2/eVswVrbtKoTDpOsaRYPcJmfvNlYHE+fjH1SgjKl+y/WI0lbG1x96qC2CUdDnOtE/tDyB2OPQogVdOzXZxyOCrrGgzZOhiOYh6HP6ZPwHbmAsuolwtc618ILvsF1RcW2LSGLGY6PAcwzBJcN4DlOUzPXbuCvdwuoFpPZLo+QO5MSwOOYLHlzR1YH3GHqFuohB96obRqavIp5WcjM4WDHkSRS5ZhjyBc9TgD0XUJ2oagtpQaulaRASBNGN0JcbBzP8ATJsLcMuG6G6y6Amoah0EvhNs+N7btD2E817De7TcHLeCDmcibw1A0wNJaOLZ7PcA6lqwfh80c4i1ruY5pNuJKCvdj2tJgqBRyE8jUG0fRHNbLsD7YfKLeklZHbhq+GvhrmDJ55Cot8YNJjee4OaT1MVb6Vo30tRNEHHHBI5rHccUb+Y+3c1yv3WgNrtDSyAD3ynbVM6nNaJm/iLIIXsK00RJU0Tjk4eyYRnk5tmSjvBjNupxVxrWnZ1WGLSVE4GwMnJu6xK0sz73A9y2WQEREBRbah4rrfIb+qxSlRbah4rrfIb+qxB49jfimm8up/m5VNVCtjfimm8up/m5VNUBERAUG2z+K5vpIP12KcqDbZ/Fc30kH67EGU2a+LKH6P8AuKkqjWzXxZQ/R/3FSVAREQEREBERAVW7cNX8cUVawc6L3qe2/knO5h7GvJ889CtJdNZSsljfFI0OY9pY9pzDmuFnA9xQamEf+3fitktnusorqRkhI5Zlo6kbvfAPCtwDhzh224Kh9bdXZKGpfA+5b4UDyP8AEjJ5p8obj1g8CF96nazSUFQJmAuYeZPHe3KMvwvliG8Hu3EoNnEXg0LpeGqhZPA8PY/cRkQeLXDe1w3EFe9BWm2nQE9QyllghfKYy9kgYMTw14aQcIzIu3h0rnYroepgjqzPFJEJHM5MSNLHHC12J2E5gZgZ9BViVVTHG1z5HsYxubnPcGNHDNxyC+43ggFpBBzBGYI6QeKCidpeq1Y7SNRLHTTyMlwPY6NjpBlG1hBwjI3ad6tbVjRcjNFwU0owyCDkntJBwksIwkjLIEDuUjsiDXLVnU/SArKVrqWdnJzROkc5hEbRHIHPPKWwkWBtbfwWxq4suUBERAUW2oeK63yG/qsUpUW2oeK63yG/qsQePY34ppvLqf5uVTVQrY34ppvLqf5uVTVAREQFBts/iub6SD9dinKg22fxXN9JB+uxBlNmviyh+j/uKkqjWzXxZQ/R/wBxUlQEREBERAREQEREEf1z1Wir4DE/mvbd0EgFzG/s4tO4jj2gEa66a0RNSzPgnZge3va5vB7HfCaeB7jYghbVLBa2arU9fFycwIcLmKRtscbjxaeI6Qcj9iDXvVnWWooZOUgfYG3KMdnHIB8ZvT0EZjsuDcuru1Ohnb7872NIBdzZM2G2/BKBY9hs7qVTa2alVdASZGY4fgzRgln1xvjPblnkSo4gl+0PXZ2kJcDMTaaM+9NORkO7lHjgegHcOskDGasa21dCfeJOZe7on3dE65uebfmk9It13WDRBsHqZtHpq5zIXB0NQ69o3c5ryG4ncnIBY5XyNjkcsrqarXzZDol02kYpADgpw6aQ2yu5jo4234G7sX1Ctg0BERAREQFFtqHiut8hv6rFKVFtp/iut8hv6rEHj2N+Kaby6n+blU1VZ7LdaKKDRtPFNVU8UjXTlzHyNa4B1TI5twekEHvUr/bjRnz6k+9Z6UEhRR79uNGfPqT71npT9uNGfPqT71npQSFQbbP4rm+kg/XYsx+3GjPn1J96z0qI7VdZ6Ko0dLFBU08shfCQ1j2vcQ2VrnGw6ACglWzXxZQ/R/3FSVRrZr4sofo/7ipKgIiICIiAiIgIiICIiD5e0EEEAg5EHMEdYUE1j2VUVQS+LFTPNyeTAMRJ4mI5D6pap6iCiq3Y9XtPvctJKOkufC7zcLh+Zd2i9jlW5w9kT08TePJ4p3kcRzg0NP29hV3ogxOrer1PRQiGBpAvie5xxPkdxc93E/gNwACyyIgIiICIiAsNrhop1VR1NOwgOkZZhO7ECHNB6iQB3rMog1cqNWa5jix1JVAjI2he8dzmgg9xXX7QVnzSs/28vqradEGrHtBWfNKz/by+qntBWfNKz/by+qtp0Qase0FZ80rP9vL6q7aXVeukcGNpKq5yGKJ8Y73PAAHaVtEiDE6qaLNLR01O4hzomNY8jcXWu63VcmyyyIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICKM6z69UVES2STHLv5KKz5M92LOzPrEKtNM7YKuQkU8cMDcxd155OogmzR2YXILxXBcBxC1e0hrPXTm8tXUu6QJHRtPayOzfwWMfK45lzj2kn/AJQbZh46R9q+lqSyQjMEg9RIWRoNY6yE3iqqlvVyrnN8xxLfwQbSrwy6Yga4tL7EGxFnbx3Kl9DbXa6OwnbDUNtmbchIevEzm/kWfodaIKqRzmkxueS4MfYHPOwIyPcgsf26g+U/K70L5Onaf5T8rvQo5Po/CCTIwZkMydziAL2yy32zXiqKKRuG7Hc4AtyJvfh29SqJedYKb5Qea/0L7GmoPlPyu9ChkVG69i1xcOFjcdy7J2lrWOALsYcQGgmwa7Cboal/t1B8p+V3oT25g+U/K70KGsdcA5Z9G78VCdbNc+Tc6KFzQRk5+ROIbw3gAN1+23Shq6fbmD4/5XehdB1kpb25UX8l/oWsh1jnc8P5WQkG9i91j1HPcppo6sElngmzs+sdRQXY3TtOd0g813oXy7T1MN8n5X+hQDR8pyXoqAmGpjLrTRtF3TAfVf6q87tdqAb6geZL6qrjS7dw71gqtnNd2FKnZcA190b85H3cvqL6Zrzo8mwqBfyJfVVDPyH/AAu+gGYKi6vyPWmjO6YeY/1V3t07TkX5Qea70KrKBu5ZyPJqpqbe39N8oPNf6EUBuiGrRREUUVXbVdfXwONFSuwy2HsiQb4w4XDGdDyCCTwBFszcWfI6wJ6M/sWp1XWunkkndculc6Z1zc3e4ut3Xt3IOonecySSSTmSSbkk8SSvqKNziGtDnOcQ1oaC4knIAAZkr5Ui2dH/APToPpD+m9BktE7L9JTWLo2QNPGZ9nW8hoJ+2yzjdkGD/G0hAw9Ait+LpBf7AsZtU05VivqIBUTtibgwMY8xtAdEwm+G2LO5zuq/ETc8hnmchmUFpu2QtflDpGFx6DEHX72y5fYVh9KbK9IxXLGxTtHyT7O8x4b+BKgjoWne1p7QCpxsx01VCvpIRUTmJ7nB8bnuewgRPdk11w3MDdbcghs8LmOcx7XMc04XNcC1zT0FpzBWRo9zT2FZPac6+la7qcwfwI1jaUc1vYESrW0XrzTSSytvUEyOcWMc1nJuGAYRcHmm47evgsmNPsszEZb4DE+3OLTY2kYScz9h61BK6KkY6R+Gk5OJjpKTkagNnlc3ksAlzdY5uObQ64NhYKbyUFM4Nc12IlodblY4w6+DO+eE2LjY23KjqqNY4yDHjnYMLAJmhpkcWOcTiF9xuLZ8AsfV6yRvg9j4qgX5T33LlMRlLmB1jzmkHnbs16NLQU1nhjYSQ9v+cyLmGSUGxcbbsHcQdwWD0a+mEZfLgxxOJawmxmEjcDRa+eB3OPUiOrTNbyFPI8nNjDh63Ycu+6ph8pcblXprDTaPmbI2WSIMvlhlYy9nVhDcbnBrQcFPckj4GYxBVvT0mjWu0o173cmx0ApCHQyzWMvvgjIkwSC2RIJ5ouosRykHFSnVOtwyGI7nZt6ncR3j/hZ/2p0OHve2aI++1JAE8Aia3lZ2xM5Mvx4AwRFrgCDdudjZZ2h1Z0cJOVxxhrmsLSHgYZeUhs1g+CzDiu7PwnnLCrPR7NGncvfUZG/2ruoaens0EtDi0XwyNIaRAHHLO933G/eslUUlPexdldrR74zcXEF1xfcADwWr6iJ6UhuAejIrCTw3BHTcKUvb/wC6Vjp6G/gm3UVK5WoTUx7u1erR0VyFlK7RDrndY5jtShgw5fasOnGs3o9m5ZaTJq8Oj49y9lUVpXkxIurEiC2kRFGnDhktXta9BuoqqancLNaS6E8HQuJ5Nw7uaetpW0S8dboyCUtdLDFIWeAXsa8tvvtcZINYtF6Fqam3seCaW+4sYSz7w80d5VhalbOKqCeGsq3wwRwnlXNLw9+QOTnDmNGeZxH+q9u0XaNPT1D6SkwM5IBsshaHuxuaHWjaeaAARmQc77rZ1hpXTVTUm9RPNLxs9xw36Qwc0dwQZTaFpeOqr6iaI3j5rGO+OGMDS4dRINuqyjileompjq5z5JH8lSxf40mQJIFy1hOQsMyTkMsjdSKfW3Q1HdlHo9lSRkZJbND+m0j2veR9UDoQVkCs1qVpVlLXUtRJfAx5EhAuWtexzC63G2K/TYG11ModcdD1dmVmjmU98hJFZ4Z0Evjax47gVgdedSzRcnPDJy1JLbkpBZxbcXa15bk4EZhwsDusOISrXLZ5NWTy11HNTzMnwvwl2G1o2t5jxdrgcIOZG9Qyu0HV0zWiemqGWGZwcowW6ZI8TfxWE0dpKeB2KCWWI7zyb3MB8oA2PerL2c7RqqSpipatwlbLzGSYWsex9iRiwgBzTbDuvcjM5oIXq/Qmunjp4ecXc5x4NYPCcTwHDtIVwfsxPuAZYZDnKYQ0cbHOcyONrneGWtDS627EQM13omK8rdTah4yEYPTi/wCcl4aTUara/E4RWAPw75nLo7VaKIYqvS+zyeWN4DIg45iz7C9+OVlTesOq09HUvp5Q0FtnixuCxwu0g8RvHa0rbhV3tj1Y9kU4qo23lpwS4AXL4Tm8dZb4Q+t0oYoajGB7HOGINIcRvuAc1dtDqhUPY17eRcx4DmOa+4c1wu0g23WsVS6trY7rkAG6Pndbf7EcT05mIn7S3vHAXsuLjO0mqVS05iPzv+l75dXZyNzPOUxXKXlamIS7Vqo6Gecus6r1HQzzlOkTWekQN2qlQRYhnnLzfsXUX3R+d/0rFRRZxkQml1ZnbvDPOXM2rU54M85TVEXEE/ZSf4rPPRTpcoYIiIoiLxabrRDT1ExNuSjkkv0YGF39EGsmsVUZauslJvjmmc3jzTK7AO5uEdyx6+Y22AHQAPsX0gsrTr3RauUDYsmzygVJHEHlpCCfLYwd1uKrVT7ULWSlNPLovSFhTyEuikJwiNxOIhzvgc7nB24G98rLnSuyatYb0zoqmM5sdjbE+x3Yg7mnK2YOfQEEAVl6rSGXV7SscvOZCXmC/BzWMma0dkmf1l4tFbJq57rzmKnjGb3F4ldYb8LWm26+9wXZrxrFSxUrNFaPOKFpBqJQbiRwdjsHjwyX2c4jLIAZXACvV69EVXJVFPLe3JyxSHhkyRriPsBHevIuHtuCOnJBtwCuVi9V63lqOkl3l8Ubz2lgv+N1lEBERAXBC5RBQG07Uk0Upnhb/wDLIcrf5L3fAPQ0nwT9XgLwYHiCRbMEGxBG4gjcVtlWUrJWPjkY17Hgte1wxNc07wQVQW0DUCShcZYsUlKTcOzc6G/wZDxbwDvtz3hK9QNqDSGU9e4Nd4Mc5ya7oE3xXfvbjxsd9rNcCAQbg5gjMELUlSDVrXOtoebDLeP5KS8kY8kXuz6pA6QUF36+a4x6Phvk+Z9xBHfeeLn2zDB+O4KE6s7YXXDK6Ntj/mwNcLeVESSe1p7lWWmNJy1M0k87y+R+87gAPBa0fBaOA7TvJK8aDa3RukYZ42ywyMkY7c5hxDs6j1Fetaq6H0zUUsnK08r4nfCwnmutwew8147R2WWzGrdc+ekpZ5Ghr5Yo5XtG4OewOIHVcoMkiIgIiICIiAsNrno99RQ1kMfhyRPawbsTrZNv17u9ZlCg1H7iDuIIsQRvBB3G6LYjWbZxRVj3SuD4pXZvfEQ3Gel7SC0nrtfrWA9xal+dVf8AB9RBSy9ujtL1MAtBPPEN9o5Hxtvx5oNlbnuLUvzqr/g+onuLUvzqr/g+ogqTSOmKmcYZ6iolb8WSR72+aTZeFXT7i1L86q/4PqJ7i1L86q/4PqIKWT/3Srp9xal+dVf8H1FndW9mtDSPbKBJNI3NjpSHBh6WsaA0HrsSgyeoWj5KfR9JDJcPay7wd7S9xfhPk4rdyz6IgIiICIiAvmRgIIIBBFiDmCDvBHEL6RBV2tuyWOTFJQlsLt5idfkT5BGcfZmOoKptMaHqKV/J1ET4nbm4hzXeQ8c1/cStql01VKyRpZIxj2nwmvaHtPaDkg1NRbB6Q2W6MlNxE+I/6L3Mb3MN2juC6KTZLo1jgXCoktwfKQ3vwBt0FPaoasS187YmB3Jgj2TIMmxs48745GTRvub7gSNmoYw1rWtFg0BrR0ACwC6dH6PigY2OGNkbG+C1jQ1o7gvSgIiICIiDGt03Cdxeexjj/RfXtxH0SdHgO32vbdvWFg0RO2/MBBFjzwOIPT1L0uo5zviHD4YGQvb8T/REZH24i/1OnwHbuncuDpmL9/h8B3HdwWPFJUfJtJsQSXNud2+w3ZfiVx7DqLACNosAAcQJBDr36D3j+qDJe3MV7c8G+HNjhn0blkFHn0M7sIMbBZwIILcgDuHdYdwUhRRERAREQEREBERAREQEREBERAREQEREBERAREQEREHCIiAiIqCBEUHKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/9k=" alt=""> +212 7-11-62-39-56
            </div>
            <div class="email">
                <img src="data:image/png;base64,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" alt="">asserraryassine7@gmail.com
            </div>
            <div class="github">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEUBAQH///8AAAD09PT6+vr39/fg4ODu7u7l5eVCQkLJyckQEBCoqKjr6+soKCjS0tJsbGy8vLwxMTF3d3fa2tpMTEybm5uLi4teXl6BgYGTk5MbGxs5OTm2trYJCQljY2NWVlbjuHefAAALUElEQVR4nO1d2ZaiMBDVIgIiiyyCbML/f+UkqN0tkKQCCTrneB/mZWySS5LaU+x2X3zxxRdffPHFF1988f8Bxnj3hBbgd/KnOjk+0ISn/47VMNVbnVy6sspzv429J1o/z/Pi3Df16X/gc1+M4zXNWy+yrf0MSJB5sV92l/DDCTEmXeF7djDL4w8jx83avGw+lc3wnjtKxDqIifwQOjhRW3zg+rAJ1X3rOgRH5AdW4KXJR9FhkzkWmSqR5wo5efcpdO7bK3aWMXnwiarbB/BhUjg8R2uY3OHmyenNdKj0aspsPRUGK+/Dd7JhR8VbeFRmYPvX27vY0GVJPYlCUYRbHd+y1yiVs6+XCgXxijfsNYAmd3VTYTjE19PGbNgOQ2p6Zdh5siUbgNAPDFGhsLzLdicHoI/0ybBZOsVWbADKVfoehbjegg19ZZ5xKhRBY54NPS6bcNnvnfRkmA7UZyMCeRa5WZUDdWFQio1BfINbjTpglfmj/5dNezHGBsJ8Uy7MuukNsaGaUrstJkVkhg2cfLOach6eiZ0GkL+DC10b/VKAcnkLFYos1EwGoHgXF7o2epcG4Pw+Lvt9q5MNwHVDXTmDXJ+/Rk1++61c9odKW6QDjvF7uVAbOtW0096kYF4RHbWQgVvJOTDkQDSzJIQ+c/5/4kYDG3r4OSFLP01TlozRZOMQN2or+shq/tUdqno1G4CGc2CCfkhkNH3pawjQOnHVHYdwc93O/8LtVh8b2JWcrdQm8Ej7hZd0Zej8kPdJfU870V3NWWpvdQQKjhwupHhIS7gv0ApnOijr34wGC/1wflesXBqoeVLZ/rPq9xzNwqigm7/m0rn7en9Y5w4AlLw5eK+ykm23uc1GxROFZbF/52Sf44+ztNSd5YkUbx2ZhKv628kOBkj832jHwXFtO4vzKu26rr9cu+5c5G1k2+6fVLTlXSfRPoCUazuVK9gAcCQLnUY1NZfovPrY2hOLpfrz83FSa3I/Xn3RxpFrHfYkK+cCl8APALkrlA30XB3izL4kFvKI2jy91Jyikiej47nwo3b+DPAlANVtK8jwRVRwnn8swCWRp/aHFbpwRC1fAtANsdSqoU4M31pxOWR26Kwx93dctcnQ7paxgVqgO7hk1gNOAjK8HSF9aCqIktlXg7FGgZVO2kURAQhjgU2cvYkMU9ZLnikMkS97Jm7gky8YeN8ucKH5hswAk2dGJACWbXC4Cv1+k2QSsZfuK5sBdOMKnzivNLUALmKHwlPWNbInWvl6x483tCSfRVRdAWouS7zhqaGpi4vA0Fw2NCTCQ7hfstjYoetc4hhREaAyNkiO/15jJGsy9lHmtBK12AacCpnb+OM26+YCvTQ+EicqLxJC2S4zkwQaxq5zWfDKVfGfqR0vezv2+sAPd3Cx0mRQ0QsC1/8BYydmh6oBiRUODdRijblECyvR6WQZFAX3GUJJGUZmSi4/xhfazQz4A0tddPGjLHO2zHMCkjOL3xlUB4sf5RkzZX5mwAsKP+AqkBGbrYfUfPFULV6aA9rfBBCfv2xhUEEFMnmK9kCgEa+xOVfmzxxATAZ9aGRHZpPySX4wdQA27Czzy+JNSkGhE04iQ8og2fnfYpexvS7UdQFS0wEInczFEVI1wE68z864fSbIYzB4uutyOLOQVB4h9Tb0wnq/dptrIVRzCz2BCklGEC+nyDfQMrvBSRMeGpxsltj/xLBd9juNRmgExKgNIiktc5AnbzUgEcqhCCWbJScvUAuNLAckQhctQMkhic50zZUaj+YRCtWdhQqe/SdkDjgyJ+HyfgwZlO7+X8hcvmRGZDaTZuKLOlrIfIqe0ULGMhj+e51HIrQAtJBZXfWFhMyc0UNmM0PzIvREkGR2kvzoVi6AOEaL1DOSEMCSPPwCUONdmCJCWgASMtFGnuZO7GliyYif4mwUA7iJYwAu0mqWXJXptyEjqqmi8FC7XRo2L7YhcxFnVWNkDKATR2ejbchIrh/lSDIXyW3MbcKzkuQdNjoTSjI9m0gAkKScsXEzWX5U6xUw3iQS8RwIst5NFmveu6YTZ3Jlt3ex20N2JXOD0BnUkhRxhLUQ4SrJ9came8NQXSeZAvpaANSSw2faQQMIZRdycl05TWxsdAUZcdCc7nR0oab09LGlMUqmli2MpZA67yXP2kcm/QB5gYbKdWeZkGeXxEwWAskv7CrIU/n529vmZAAkolL3O44KZE7yy//vLJ7bBwolp8LLJk/EZspn4VTIu474KvVmcJRfvCS+iXZK8kJgBqXYHaJGkwoBX3+rK7onELf1baUtDjuZ1hrWRnerK/pyEHtMdYeDrHr+AU9r5xFAdlCxSjUtJ6/SvINJaD182HMaxOZmg6repJVaRw8MYmA9neECIa/vwBi+auROkur5g6BoVjdaZU1fO+zNdUe9EBGq0fY9uF7s2c5MACiqLqskAf3bYxqjeyQsUHCTovO8b5KmP/szvQ1JlnfJkj7sjwvC10KhUyqp1N/buA2I9Wgdf2vyueCNExfnRq0P+70zQnItfKVmdhEqlzEea3TrZEgysc7fSR/PBhtdzy+vjz7siOvA1J28XFM/Vmxps8xeh7p9WZqAmd1UQ0cdJLymbYEdtVWR9k0oijdQGsdrWlRtZAfK7VGyRR0O6LxfRaXj3+9X03d/K7h7nFhWYHtCB4Gq5NYNLGtJnxfiL0vcTeJnJBpUJDReueN2Uxh+2Ipv68BJdqONC3vJiRnGTMZnw2WGBDSu24St4L1GMt8J4RjPgyy+HjIT2Diw3gpwLULRdSFEdl0eAOI8erk+g3By0A/ps9kC/9hk8hGlNxc4WJG3n6twHAKAVM913Ij0AZNag9uSNkKretDNBbAy1gmo8awz744LKgwFUKlzOay66EbF81Q/+mxlcqcYi+4nUGkgEDQb4WJlLgV2M34N68GSnKnrOtvKgeCinXBS7u+UKQSY5secKcfxnh1kZoMPNs6oFfS04YCsLkGC2/T1k0G/Q+j7p/M0yYY9pMqHZln3jJch6ZwnQnSooIck2MdwrEYmb4wNdcqS2mMsM8rGbKYXp53rYHOWls0+ppF6dyuLEMsr+xCb7eA2G5uHnmuu1OofW+l3owJ2YcjIhLvwWuR5lfb3z2Vhn3tSEWdEUyvNGWV/T48OM09du3x2ZoLGj9DuBsiS4y/wdIXo4OaPtc2z2IMqImcfN2zLuekQwkPfoFQiky01lmfGnYRqfvqBUAFxZc5lSxyqLJtK5WornozO/kMzgfTf/MzDBS7pZsN3nVIjo7eVCmUzDjpErz3jHn6/SjwbT6baaY5pT6Lz2XndEHgy2u/rw7QbjJuv+owPmoyB3gPUrhkbYpZXTAOz2gWAJJ6wjAxlMxnd8qpnnOwPtJLxDXAZjng6DT0enCw/H5PwdKrDsOlT3y61kvFNlenMnJs7yN7Jsiy4N/3EhoIxZIgxLrhyA3Q9KoKMlZv8aguiIY1GMg6yDnM5m2Q+am6AjG38cgs1XCQFFLrIeBtcoWLhP2E+RQ+Zg1pzqcWgQk30dUMtZOxqm+sTbBqN4Ks6GkQz8Yy1tZqbR83vao6tnoQbj4zjrw2QqQFuR16zu9Vkom6TD7b9nQqcOBUpK8k4Ra2/vkg6F1ZSMWcPoMnMRWdI+6YPUzNn2Z8KgjVk2Mez3kFlmA9LtY4/PI0mMy4Ft6L09jYqw4wYndevaSwjQ4Io1VUgtQIA1zz6s9uwZToAv39E7DZ963eOf0B90EsRP00cdGHrb/qXRP75M6gwMFFw9j2LEGKjQ1zUAPfY92Zsvzi++2Parxh6/adVVSiYupRNWVXlVUv1nWawiic1fceKmlTyBptCveDsU5l88cUXX3zxxRdffLEa/wDMUJzLfVCCVgAAAABJRU5ErkJggg==" alt=""><a href="http://github.com/HARDAK" target="_blank" rel="noopener noreferrer">https://github.com/HARDAK</a>
            </div>
        </div>
    

    
    `;
    content.innerHTML = html;
}

const btn_contact = document.getElementById('contact');

btn_contact.addEventListener('click', render_contact);





