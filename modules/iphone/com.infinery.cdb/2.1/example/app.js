var dynapp = require('com.infinery.cdb');

	var cdb = dynapp.create('a8f6dbc8-6a50-4499-ab25-7eb468d463ae'); 

	cdb.session(
	{
		connected: function(e)
		{
			cdb.write('hello', 'connected: ' + Ti.Platform.id);

			if (false)
			{
			setInterval( function()
			{
				for (var i = 0; i < 5; i++)
				{
					cdb.write("info", " {i : " + i + ", time: '" + Date() + "'} ");
				}
			}, 1000);
		}
		}
	});	

