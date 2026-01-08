function ($timeout) {
	var c = this;

	//var z = c.options.zone || "America/Los_Angeles";
  var z = c.data.userTZ || moment.tz.guess();
	c.timezone = z;
  
	//Change the sys_id of the image attached to the widget's registration, one image for daytime and another for nighttime.
	var DAY_IMAGE   = 'bc961585831ef210daa0fecfeeaad397';
	var NIGHT_IMAGE = '2f2795c5831ef210daa0fecfeeaad3f5';
  //
	function setBackground(type) {
		var img = (type === "night") ? NIGHT_IMAGE : DAY_IMAGE;

		c.bgImage =
			"linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.85)), " +
			"url(/sys_attachment.do?sys_id=" + img + ")";
	}

	function tick() {
		var now = moment().tz(z);

		// Hora e data
		c.time = now.format("HH:mm");
		c.dateText = now.format("ddd, DD MMM");

		// Tema
		var h = now.hours();
		c.darkness = "";

		if (h >= 6 && h < 18) {
			c.darkness = "day";
			setBackground("day");
		} else {
			c.darkness = "night";
			setBackground("night");
		}

		$timeout(tick, 1000);
	}

	tick();
}
