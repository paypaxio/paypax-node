/** PayPax Payments
 *
 * ```typescript
 * const paypax = new Paypax();
 * ```
 *
 */
import {CreateOrderInterface} from "./interfaces/create-order.interface";
import axios from "axios";
import {CreateOrderResponseInterface} from "./interfaces/create-order-response.interface";
import {VerifyOrderResponseInterface} from "./interfaces/verify-order-response.interface";

class Paypax {
  constructor(private apiKey:string,private silentMode:boolean=false) {
    // nothing to do
  }

  private async callAPI(url:string,data:any,method='post'):Promise<CreateOrderResponseInterface|VerifyOrderResponseInterface|any>{
    const axiosConfig={
      method,
      url,
      data
    };

    let apiResponse:any={ok:false};
    axios(axiosConfig).then((response)=>{
      apiResponse=response.data;
    })
    .catch((e)=>{
      if(!this.silentMode || !e?.response?.data)
        throw e;
      apiResponse= e?.response?.data;
    })

    return apiResponse
  }

  public async createOrder(data:CreateOrderInterface){
    return this.callAPI(`https://api.paypax.io/v1/merchant-api/v2/createOrder/${this.apiKey}`,data,'post');
  }

  public async verifyPayment(paypaxOrderId:'string'){
    return this.callAPI(`https://api.paypax.io/v1/merchant-api/v2/createOrder/${this.apiKey}/${paypaxOrderId}`,{},'post');
  }
}
module.exports=Paypax;
module.exports.default = Paypax;
