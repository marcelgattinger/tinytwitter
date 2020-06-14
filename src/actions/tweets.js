//action type when we receive and dispatch all tweets to update the store
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export function receiveTweets (tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets
	}
}