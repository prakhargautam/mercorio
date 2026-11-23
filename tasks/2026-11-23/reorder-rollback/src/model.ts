export type Task={id:string;title:string};
export function reorder(items:Task[],from:number,to:number):Task[]{const next=[...items];const [item]=next.splice(from,1);next.splice(to,0,item);return next;}
export function orderAfterFailure(previous:Task[],optimistic:Task[]):Task[]{
  // Intentional bug: failed persistence keeps the optimistic order instead of restoring the previous order.
  return optimistic;
}
