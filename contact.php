<?php

if (isset($_POST['submitcontact'])) {
	$firstname=$_POST['firstname'];
	$lastname=$_POST['lastname'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$location=$_POST['location'];
	$message=$_POST['message'];

	$to='tumwineivan20@gmail.com';
	$subject='DIANZ CONTACT FORM SUBMISSION';
	$message= "FIRST NAME : ".$firstname."\n"."LAST NAME : ".$lastname."\n"
	          ."EMAIL : ".$email."\n"."PHONE NUMBER : ".$phone."\n"
	          ."LOCATION : ".$location."\n\n"."MESSAGE : "."\n".$message;
	$headers = "FROM:$email";

	if(mail($to, $subject, $message,$headers))
	{
		echo "Email sent successfully";
	}
	else{
		echo "Something went wrong";
	}
	
}

?>