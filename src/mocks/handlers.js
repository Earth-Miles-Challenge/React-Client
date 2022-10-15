import { rest } from 'msw';

export const handlers = [
	// Handles a GET /user request
	rest.get('/user/activities', async (req, res, ctx) => {
		const { activities } = await req.json()
		return res(
			ctx.json(activites)
		)
	}),
  ]