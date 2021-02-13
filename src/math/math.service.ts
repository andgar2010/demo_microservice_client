import { Injectable, Logger } from '@nestjs/common';
import { ClientOptions, ClientProxyFactory, Transport, ClientProxy } from "@nestjs/microservices";
import { Observable } from 'rxjs';

@Injectable()
export class MathService {
  private client: ClientProxy;
  private logger = new Logger('MathService_ClientHTTP');
  private  microserviceOptions: ClientOptions = {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 8877
      }
    }

  constructor(){
    this.client = ClientProxyFactory.create(this.microserviceOptions)
  }

  /**
   * accmulate
   */
  public accmulate(data: number[]): Observable<number> {
    Logger.log('Call accmulate to microservice Math')
    return this.client.send<number, number[]>('add', data);
  }
}






// const client = ;

// client
//   //.send<ReturnType, ParamsType>(pattern, param)
//   .send<number, number[]>('add', [1,2,3])
//   .subscribe(result => logger.log(result));