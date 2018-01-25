function timeConvert(time) {
	var nightCheck = time.indexOf("PM")
	var newTime;
	var hourTime;
	var newHourTime;
	var realTime
	if (nightCheck > -1 == true) {
		newTime = time.replace("PM", "");
		newTime = newTime.split(":")
		hourTime = newTime[0]
    var hourTime = parseInt(hourTime, 10)
    if (hourTime != '12') {
      newHourTime = hourTime + 12
    }
    else {
      newHourTime = 12
    }
		newTime[0] = newHourTime
		realTime = newTime.join(':')
	}
	else if (nightCheck == -1) {
		newTime = time.replace("AM", "");
		newTime = newTime.split(":")
		hourTime = newTime[0]
    var hourTime = parseInt(hourTime, 10)
		newHourTime = hourTime - 12
		newTime[0] = newHourTime
		realTime = newTime.join(':')
	}
	return realTime
}

document.write(timeConvert("12:05:45PM"))