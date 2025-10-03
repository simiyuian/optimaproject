//Donate Dialog Functionality
const handleDonateDialog = () => {
  var swal = new Swal({
    title: "Donate To Blossoms of Ghetto",
    html: `Help Us Reach Those in Need! <br/> Every Contribution Counts. <br />  <br/> Kindly use the <b>M-Pesa</b> Details Below, Thanks in Advance. `,
    showCloseButton: true,
    showConfirmButton: false,
    footer: `
                <div id="donate_content">
                  <div>
                    <h3>PAYBILL NO.</h3>
                    <p>522533</p>  
                  </div>
  
                  <div>
                    <h3>ACCOUNT NO.</h3>
                    <p>7877206</p>  
                  </div>
                </div>
              `
  });
};
