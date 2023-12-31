import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const price = parseFloat(req.body.subTotal);
            const url = req.body.url
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1Ng6vSSIzgCNqydLJ45tDZ4n' },
                ],

                line_items: req.body.cartItems.map((item) => {


                    return {
                        price_data: {
                            currency: 'inr',
                            product_data: {
                                name: item.name,

                            },
                            unit_amount: Math.round(item.discountedPrice * 100),
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.count
                    }
                }),


                // line_items: [
                //     {
                //         price_data: {
                //             currency: 'inr',
                //             product_data: {
                //                 name: 'items',
                //             },
                //             unit_amount: Math.round(price * 100), // Convert to cents
                //         },
                //         quantity: 1, // You can adjust the quantity as needed
                //     },
                // ],

                success_url: `${url}`,
                cancel_url: `${req.headers.origin}/canceled`,
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);

            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}