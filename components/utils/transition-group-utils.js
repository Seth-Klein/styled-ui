// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
export const TransitionTimeouts = Object.freeze({
	Fade: 150, // $transition-fade
	Collapse: 350, // $transition-collapse
	Modal: 300, // $modal-transition
	Carousel: 600, // $carousel-transition
});

export const TransitionStatuses = Object.freeze({
	ENTERING: 'entering',
	ENTERED: 'entered',
	EXITING: 'exiting',
	EXITED: 'exited',
});
