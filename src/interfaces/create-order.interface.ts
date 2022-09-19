export interface CreateOrderInterface{
	amount:string;//required numeric string;in USD
	orderId:string;//required
	callBackUrl:string;//required
	orderPagePrimaryLanguage:string;//optional. default:en .language codes which paypax supports. ex. en
	description:string;//optional. any information about the user order to be recorded in paypax payment system
	autoExchange:boolean;//optional and is now forced to be true by paypax; read more in paypax merchant api documents
}