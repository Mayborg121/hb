const generated_link = document.getElementById('generated_link');
const fName = document.getElementById('fName');
const mName = document.getElementById('mName');
let f_link = "https://mayborg121.github.io/bw/" ;
let link_copy = document.getElementById('link_copy');

function gen_link(){
    event.preventDefault();

    const birthDate = document.getElementById('birthDate').value;
    const bdate = new Date(birthDate);

    // Extract day and month
    const day = bdate.getDate();
    const month = bdate.getMonth() + 1; // Month is 0-based, so add 1

    // Format as "day.month"
    const formattedDate = String(`${day}.${month}`);

    console.log(day);



    if(Number.isInteger(day)){



    const gen_link = String("https://mayborg121.github.io/bw/"+"?"+"n="+fName.value+"&"+"m="+mName.value+"&"+"d="+formattedDate) ;

    
    
    console.log(gen_link);
    link_copy.innerHTML = ` <div id="link_container"> <p id="generated_link">${gen_link}</p> </div>
                            <button id="copyButton">Copy</button>
                            <button id="visit_link">Visit</button>`;


    f_link = gen_link;

    }

    else{
        link_copy.innerHTML = ` <div id="link_container"> <p id="generated_link"> "Please Select Date" </p> </div>
                            <button id="copyButton">Copy</button>
                            <button id="visit_link">Visit</button>`;
    }


    document.getElementById("copyButton").addEventListener("click", function () {
        copyButton.innerText = "Copied !";
        // Use Clipboard API to copy the text
        navigator.clipboard.writeText(f_link);
          
    });
    
    document.getElementById("visit_link").addEventListener("click", function () {
        const link = f_link; // Get the text
      
        // Open the link in a new tab
        window.open(link, "_blank");
    });
}


