const DATA = {
	posts: [
		{
			id: 1,
			title: 'This is post 1',
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image: 'https://picsum.photos/200/300/?random',
			views: 254,
			user_id: 1,
			date: new Date('2019-02-01')
		},
		{
			id: 2,
			title: 'This is the second post',
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image: 'https://picsum.photos/200/300/?random',
			views: 78,
			user_id: 2,
			date: new Date('2019-01-02')
		},
		{
			id: 3,
			title: 'And this is another post',
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image: 'https://picsum.photos/200/300/?random',
			views: 12,
			user_id: 3,
			date: new Date('2019-01-03')
		},
		{
			id: 4,
			title: 'Well this is also a post',
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image: 'https://picsum.photos/200/300/?random',
			views: 65,
			user_id: 1,
			date: new Date('2019-01-04')
		},
		{
			id: 5,
			title: 'Our latest post',
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image: 'https://picsum.photos/200/300/?random',
			views: 12,
			user_id: 2,
			date: new Date('2019-01-05')
		}
	],
	users: [
		{ id: 1, name: 'John', lastname: 'Doe', age: 45 },
		{ id: 2, name: 'Anita', lastname: 'Groot', age: 34 },
		{ id: 3, name: 'Jan', lastname: 'Kaas', age: 34 }
	],
	comments: [
		{ id: 987, post_id: 1, body: 'Eerste comment op post met de id 1', date: new Date('2019-09-03') },
		{ id: 995, post_id: 1, body: 'Nog een comment op post 1', date: new Date('2019-03-17') },
		{ id: 993, post_id: 2, body: 'Comments en meer comments xxx', date: new Date('2019-07-24') },
		{ id: 992, post_id: 3, body: 'Comments en meer comments yyy', date: new Date('2019-06-23') },
		{ id: 991, post_id: 4, body: 'Comments en meer comments zzz', date: new Date('2019-02-10') }
	]
};

export default DATA;
