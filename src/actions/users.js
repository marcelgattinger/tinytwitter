//action type when we receive users
export const RECEIVE_USERS = 'RECEIVE_USERS'

// action creator
export function receiveUsers (users) {
	return {
		type: RECEIVE_TWEETS,
		users
	}
}