//Onclick function
function noteSelectFunction(clicked) {
	console.log(clicked);

	switch (clicked) {
	  case "jobLogged":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi ________,\n \nThanks for contacting Greater Western Water.\n \nOne of our field officers will visit the site to assess the fault within <Timeframe>. If you would like to follow up on this or should the fault get worse, please call our 24-hour Operational Control Centre on 13 44 99 and quote the reference number <Job Number>. \n\nFor any future faults or emergencies, please contact us by email on faults@gww.com.au or by calling 13 44 99. We are available 24 hours, 7 days a week (24x7).";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "dirtyWater":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi _________.\n \nThanks for reaching out to Greater Western Water regarding your concerns with water quality at your address.  The best way to resolve this is to perform a flush to clear out the water from your pipes, please follow these steps:\n \n1. Run the tap closest to the water meter (most likely your garden tap) for 2-3 minutes, or until the water runs clear. If it does not run clear after 3 or more minutes please contact us.\n2. Wait 10-15 minutes without using any water in your property to allow the water to settle.\n3. Run the tap at the rear of the property, furthest from the Water Meter for about 2-3 minutes to draw all the dirty water out of your property. This should resolve the issue for you.\n\nThe water from our catchments is unfiltered, so over time sediment builds up in pipes which, when disturbed, gives water a yellow to brown appearance. The water is still treated so completely safe to drink, however understandably its appearance is concerning. If you find the front garden tap has discoloured water coming out of it after running it for several minutes, please give us a call on 132 462 or by replying to this email.";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "pressureIssues":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Thanks for reaching out to Greater Western Water. Are you able to do a couple of quick checks and tests for me?\n  \n1. Go out to your water meter and ensure that none of the piping appears kinked.\n2. Check the stop tap at the water meter is fully turned on. Turn on your garden tap and while the garden tap is open, adjust the stop tap on the street side of the meter to see if the water flow increases/decreases.\n3. If the numbers on the meter are moving despite all taps on the property closed, we would recommend to engage with a licensed plumber as there is an internal leak which is affecting your water pressure.\n4. Get a standard 10L bucket and fill it up at the garden tap, timing how long it takes to fill. If it takes longer than 30-45 seconds please give us a call.\n5. Is the pressure fine at the garden tap but worse inside? If so you should engage a plumber as there may be an internal fault reducing pressure.\n6. Are others in your street affected, or is it just your property with low pressure (at the garden taps). \n7. Finally, has the pressure always been bad, did it get worse one day or has it slowly deteriorated over time?\n  \nCall us on 132 642 if you have questions, or reply to this email to discuss this further, especially if the bucket test takes longer than 30-40 seconds.\n \nMost often water pressure issues are because of a Pressure Reduction Valve (PRV) located just after the meter. This can deteriorate over time leading to reduced pressure. This can be replaced by a plumber to fix the issue.\n \nPlease let us know how you go.";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "leakTest":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi _______.\n\nThanks for contacting Greater Western Water.\n\nCan you please perform a leak test for us to determine where the leak is located?\n\nPlease take a photo of the meter reading and do not use any water for at least three (3) hours (preferably overnight).\n\nReturn to the water meter and compare readings from the photo and the current reading on the meter.\n\nIf the reading has changed, this would indicate a leak after the meter in which you would need to contact a plumber to repair.\n\nIf the reading does not change, please let us know. ";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "advisingCurrentWaterOffEmergency":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Good morning/afternoon/evening  _____________,\n\nThank you for contacting Greater Western Water regarding no water at -ADDRESS-.\n\nGreater Western Water currently have emergency works in -STREET NAME- and unfortunately this is why there is no water to your property, re CASE -SR-.\n\nWe estimate that the water supply will be restored before -TIME-. If you require emergency water, please see out crew on-site in front of -ADDRESS-, they may be able to assist you with bottled water or a tap on the closest hydrant.\n\nIf you require further updates please contact out 24/7 emergency faults line on 132 642 or you can email faults@gww.com.au";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "noWaterRecentBurstOS":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi _______,\n\nThanks for getting in touch with us.\n\nWe have recently received a report of a burst at ______________ which could likely be the reason for little/no water pressure to your property.\n\nA response officer is en route to investigate and assess the situation.\n\nThank you for your understanding.";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "noWaterRecentBurstAssessmentComplete":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi __________,\n\nThanks for contacting Greater Western Water.\n\nWe have received a report of a burst located at ____________________ under SR _________. A response officer/Operations Supervisor has attended and have reduced pressure on the mains to prevent extensive water loss.\n\nOur next available crew will be attending as soon as possible to conduct repairs.\n\nThank you for your patience.";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "waterOffPlanned":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi ___,\n\nThanks for contacting Greater Western Water.\n\nI have checked the system and we have works at _________________________, which is affecting your water supply. The water will be restored by at latest _______, provided there are no complications.\n\nThank you very much for your patience and understanding.";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "internalFaultWater":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi _______,\n\nThank you for contacting Greater Western Water regarding your fault at -ADDRESS-.\n\nBased on the description you have given unfortunately the ______________ is an internal asset and is the responsibility of the homeowner. If this is your property you will need to engage a licensed plumber, if you are renting the property you will need to contact your real estate/landlord. ";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "billingAccountEnquiriesCustomer":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi _______,\n\nThank you for contacting Greater Western Water.\n\nWe have forwarded your concern to our Customer Service Team for action during business hours for assistance.\n\nYou may contact them directly in the future at enquiries@gww.com.au.\n\nFor any future faults or emergencies, please contact us by email on faults@gww.com.au or by calling 13 44 99. We are available 24 hours.";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "billingAccountEnquiriesCSC":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi team,\n\nJust passing this onto you for assistance as it has come through the reportafault inbox. ";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "differentWaterAuthority":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi _____,\n\nThank you for contacting Greater Western Water.\n\nGreater Western Water does not supply water to your area, we would recommend to get in touch with _________ to discuss your fault.";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "customerResponseMoreTime":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi ________,\n\nThank you for contacting Greater Western Water.\n\nWe have received your email and your concern is currently being looked into – we will be in touch soon.\n\nThanks for your patience. ";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
 	  case "hourlyUpdate":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "TOTAL Calls Received: \nTOTAL Calls Abandoned: \nOutstanding Emails: \nOutstanding IVR Recordings/Worksheet: \nOutstanding Spills: \nOutstanding CSEs: \nOutstanding Pages: \nOutstanding Shut Off Reports: N/A\nSCADA Moved Over: N/A\n";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
 	  case "bpayRequests":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Pending: \nDeactivation: \nTOTAL OUTSTANDING: \nTOTAL COMPLETED (TODAY): ";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
 	  case "werribeeRtp700Mohammed":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Pending: \nDeactivation: \nTOTAL OUTSTANDING: \nTOTAL COMPLETED (TODAY): ";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
 	  case "eliasSps703":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Pending: \nDeactivation: \nTOTAL OUTSTANDING: \nTOTAL COMPLETED (TODAY): ";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
	  case "redBoldScada":
		var tempInput = document.createElement("textarea");
        	tempInput.value = "<strong><font color='#ff0000'></font></strong>";
        	document.body.appendChild(tempInput);
        	tempInput.select();
        	document.execCommand("copy");
        	document.body.removeChild(tempInput);
        	console.log("Copied the text:\n" + tempInput.value);
	break;
	  case "snapSendSolveAlreadyLoggedCaseNotes":
		var tempInput = document.createElement("textarea");
        	tempInput.value = "SnapSendSolve sent in reporting same fault. Advised job is already in system and scheduled for repairs - (, )";
        	document.body.appendChild(tempInput);
        	tempInput.select();
        	document.execCommand("copy");
        	document.body.removeChild(tempInput);
        	console.log("Copied the text:\n" + tempInput.value);
	break;
 	  case "rodEdgewoodBlvdEduction":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "DRY1-7\nExit: 18:00\n\n";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
 	  case "jobAlreadyLogged":
		var tempInput = document.createElement("textarea");
  		tempInput.value = "Hi __,\n\nThanks for contacting Greater Western Water.\n\nOne of our field officers has already visited the site to assess the fault and has scheduled it for repairs. If you would like to follow up on this or should the fault get worse, please call our 24-hour Operational Control Centre on 13 44 99 and quote the reference number <Job Number>.\n \nFor any future faults or emergencies, please contact us by email on faults@gww.com.au or by calling 13 44 99. We are available 24 hours, 7 days a week (24x7).\n";
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Copied the text:\n" + tempInput.value);
	  	break;
      case "webformAlreadyLoggedCaseNotes":
      	var tempInput = document.createElement("textarea");
        tempInput.value = "Webform sent in reporting same fault. Advised job is already in system and scheduled for repairs - (, )";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        console.log("Copied the text:\n" + tempInput.value);
		break;
      case "councilStormwater":
		var tempInput = document.createElement("textarea");
        tempInput.value = "Hi _____,\n\nThank you for contacting Greater Western Water.\n\nGreater Western Water does not manage stormwater assets, we would recommend to get in touch with your local council to discuss your fault.";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        console.log("Copied the text:\n" + tempInput.value);
		break;
	case "waterOffWorkSheet":
		var tempInput = document.createElement("textarea");
        tempInput.value = "Greater Western Water is currently undertaking repairs at ______. This is affecting the supply of water to ______. We are rectifying the situation and expect that the water will be restored by _____. If you require emergency water, you can see our crew onsite at: ________. Thank you for calling Greater Western Water".bold();
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        console.log("Copied the text:\n" + tempInput.value);
		break;
	case "ceaseDischargeAnnouncment":
		var tempInput = document.createElement("textarea");
        tempInput.value = "<b>Company:\nCompany Contact:\nContractor:\nContractor\nContact:\n\nCASE#:\n\n\nNOTE:\n\nPlease check the Cease Discharge Agreement for any further information needed.</b>";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        console.log("Copied the text:\n" + tempInput.value);
		break;

	  	}
}