export class Job {
  id:number;
  company:string;
  logo:string;
  new:boolean;
  featured:boolean;
  position:string;
  role:string;
  level:string;
  postedAt:string;
  contract:string;
  location:string;
  languages: string[];
  tools:string[];
  constructor(data:any) {
    this.id = data && data.id ? data.id : null;
    this.company = data && data.company ? data.company : null;
    this.logo = data && data.logo ? data.logo : null;
    this.new = data && data.new ? data.new : false;
    this.featured = data && data.featured ? data.featured : false;
    this.position = data && data.position ? data.position : null;
    this.role = data && data.role ? data.role : null;
    this.level = data && data.level ? data.level : null;
    this.postedAt = data && data.postedAt ? data.postedAt : null;
    this.contract = data && data.contract ? data.contract : null;
    this.location = data && data.location ? data.location : null;
    this.languages = data && data.languages ? data.languages : [];
    this.tools = data && data.tools ? data.tools : [];
  }
}
