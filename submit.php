<?php 
	use PHPMailer\PHPMailer\PHPMailer;

	require_once 'phpmailer/Exception.php';
	require_once 'phpmailer/PHPMailer.php';
	require_once 'phpmailer/SMTP.php';

	$mail = new PHPMailer(true);
	
	$fname = $_POST['f_name'];
	$lname = $_POST['l_name'];
	$phone = $_POST['phone_num'];
	$email = $_POST['mail'];
	$msg = $_POST['msg'];

    // $sec = $_POST['sec'];

    if(!empty($fname) && !empty($lname) && !empty($phone) && !empty($email) && !empty($msg)){
		$mail->isSMTP();
		$mail->Host = 'pld108.truehost.cloud';
		$mail->SMTPAuth = true;
		$mail->Username = 'info@optimamigrationconsultants.co.ke';
		$mail->Password = 'Optima@Info';
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
		$mail->Port = '587';

		$mail->setfrom($email);
		$mail->addAddress('info@blossomsofghetto.org');

		$mail->isHTML(true);
		$mail->Subject = "Message Request from Optima Website";
		$mail->Body = "<h2>First Name : </h2> <p>".$_POST['f_name']." </p><br><h2>Last Name : </h2> <p>".$_POST['l_name']." </p><br><h2>Phone Number : </h2> <p>".$_POST['phone_num']." </p><br><h2>Email : </h2><p>".$_POST['mail']." </p><br><h2>Message Request: </h2><p>".$_POST['msg']."</p>";



        
        if($mail->send()){
            echo 1;//For success TRUE				
        }else{
            echo 0;//For Error FALSE
        }
      
		
	}else{
		echo 0;
	}
?>
