module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'bac'),
			user: env('DATABASE_USERNAME', 'bac'),
			password: env('DATABASE_PASSWORD', '123456'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
