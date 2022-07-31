const miliSecInYear = 31557600000;
const miliSecondInMonth = 2629800000
const miliSecondInDay = 86400000

let intervalId1 = undefined;
let intervalId2 = undefined;

let dateFunction = () => {
	let today = new Date();
	let dateEntered = new Date(document.querySelector("#dateID").value);	


	//some valations for empty input	
	if (dateEntered == "" || dateEntered == "Invalid Date") {
		alert("Enter a date!");
		return;
	}
	//validation if user enters a birth-date of future
	if (dateEntered > today) {
		alert("Age can't be greater then current Date!");
		return;
	}

	//if you have your Birthday Today
	if (today.getMonth() == dateEntered.getMonth() && today.getDate() == dateEntered.getDate()) {
		// document.querySelector("#daysLeft").innerHTML = `Happy Birthday!`;
		alert(`Happy Birthday!`);
	}

	// Calculating when is the next birthday
	if (intervalId1 !== undefined) clearInterval(intervalId1)
	getTimeLeft()
	intervalId1 = setInterval(() => {
		getTimeLeft()
	}, 1000);

	// calculating how old is a person
	if (intervalId2 !== undefined) clearInterval(intervalId2)
	yearOld()
	intervalId2 = setInterval(() => {
		yearOld()
	}, 1000);
}

let getTimeLeft = () => {

	let today = new Date();

	const dateEntered = new Date(document.querySelector("#dateID").value + " 00:00:00");

	let birthdayDateThisYear = dateEntered; // 20-4-1994
	birthdayDateThisYear.setFullYear(today.getFullYear()); // 20-4-2022


	if (today.getMonth() > dateEntered.getMonth()) {
		// birthday month is already passed
		birthdayDateThisYear.setFullYear(birthdayDateThisYear.getFullYear() + 1) // 20-04-2023
	}

	let nextBirthdayDiffInMili = birthdayDateThisYear - today;

	let nextBirthdayInDays = Math.floor(nextBirthdayDiffInMili / miliSecondInDay);
	let nextBirthdayInDaysReminder = nextBirthdayDiffInMili % miliSecondInDay

	let nextBirthdayInHours = Math.floor(nextBirthdayInDaysReminder / (1000 * 60 * 60));
	let nextBirthdayInHoursReminder = nextBirthdayInDaysReminder % (1000 * 60 * 60);

	let nextBirthdayInMinutes = Math.floor(nextBirthdayInHoursReminder / (1000 * 60));
	let nextBirthdayInMinutesReminder = nextBirthdayInHoursReminder % (1000 * 60);

	let nextBirthdayInSeconds = Math.floor(nextBirthdayInMinutesReminder / 1000);

	document.querySelector("#daysLeft").innerHTML = `Your Next Birthday is in ` + "<br>";
	document.querySelector("#day").innerHTML = nextBirthdayInDays + " D";
	document.querySelector("#hour").innerHTML = nextBirthdayInHours + " H";
	document.querySelector("#minute").innerHTML = nextBirthdayInMinutes + " M";
	document.querySelector("#second").innerHTML = nextBirthdayInSeconds + " S";

	// increment
	birthdayDateThisYear.setSeconds(birthdayDateThisYear.getSeconds() - 1);
}

let yearOld = () => {
	let today = new Date();
	const dateEntered = new Date(document.querySelector("#dateID").value + " 00:00:00");

	let diffInMili = today - dateEntered;

	let ageInYear = Math.floor(diffInMili / miliSecInYear);
	let reminderOfYearAge = diffInMili % miliSecInYear;

	let ageInMonth = Math.floor(reminderOfYearAge / miliSecondInMonth);
	let reminderOfMonthAge = reminderOfYearAge % miliSecondInMonth;

	let ageInDay = Math.floor(reminderOfMonthAge / miliSecondInDay);
	let ageInDayReminder = reminderOfMonthAge % miliSecondInDay;

	let ageInHour = Math.floor(ageInDayReminder / (1000 * 60 * 60));
	let ageInHourReminder = ageInDayReminder % (1000 * 60 * 60);

	let ageInMinute = Math.floor(ageInHourReminder / (1000 * 60));
	let ageInMinuteReminder = ageInHourReminder % (1000 * 60);

	let ageInSecond = Math.floor(ageInMinuteReminder / 1000);

	document.querySelector("#age").innerHTML = `You are now ${ageInYear} years, ${ageInMonth} month, ${ageInDay} days, ${ageInHour} hour, ${ageInMinute} minutes and ${ageInSecond} seconds old`;
}