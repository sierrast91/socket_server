
export interface user_t{
    id:String;
    name:String;
    match:user_t|null;
}
const users:user_t[]=[];

export const create =(_id:string,_name:string):user_t=>{
    return {id:_id,name:_name,match:null};
}
export const add =(new_:user_t)=>{
    users.push(new_);
    return users.length;
}
export type fcn = (a:user_t,b:user_t) => boolean;

export const comp_id = (a:user_t,b:user_t)=>{
    return  a.id==b.id;
}
export const remove =(socket:string)=>{
    const index=users.findIndex(ele=>socket===ele.id);
    if(index!=-1){
        users.splice(index,1);
    }
    return users.length;
}

