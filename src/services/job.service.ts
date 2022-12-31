import { Job } from "../models/Job.model";
import listData from "./data.json";
export class JobService {
  static getJobs(filters:string[]) {
    let results = listData.map((ele) => new Job(ele));
    if(filters.length){
      results = results.filter((job)=>{
        return filters.includes(job.level) && filters.includes(job.role)
      })
    }
    return results;
  }
}
