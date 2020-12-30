import User from '../app/models/User';

export default {
	render(user: User) {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
		};
	},

	renderMany(user: User[]) {
		return user.map(user => this.render(user))
	}
};