export interface CreateOrderResponseInterface{
	ok:boolean;
	orderId:string;
	trackingId:string;//numeric string
	paymentUrl:string;//url which is returned from paypax to redirect user to that
}