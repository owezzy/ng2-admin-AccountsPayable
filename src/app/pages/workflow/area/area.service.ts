import { Injectable } from '@angular/core';
import { CustomHttpService } from '../custom-http.service';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AreaService {

  private areaUrl = environment.api_server + 'area/';

  constructor(private http: CustomHttpService) { }

  createArea(data: any) {
    const url = this.areaUrl + 'create/';
    return this.http.post(url, data).map((res) => res.json());
  }

  getAllArea() {
    const url = this.areaUrl + 'all/';
    return this.http.get(url).map((res) => res.json());
  }

  setStatus(data: any) {
    const url = this.areaUrl + 'status_change/';
    return this.http.put(url, data).map((res) => res.json());
  }

  getAreaById(id: any) {
    const url = this.areaUrl + 'id/' + id;
    return this.http.get(url).map((res) => res.json());
  }

  updateArea(data: any) {
    const url = this.areaUrl + 'update/';
    return this.http.put(url, data).map((res) => res.json());
  }


}
