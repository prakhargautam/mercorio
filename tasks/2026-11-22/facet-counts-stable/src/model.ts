export type Item = { name:string; category:string; team:string };
export function visibleItems(items:Item[],category:string,team:string):Item[]{return items.filter(x=>(category==='All'||x.category===category)&&(team==='All'||x.team===team));}
export function categoryCounts(items:Item[]):Record<string,number>{
  // Intentional bug: callers pass the already-filtered list, so other facet counts disappear.
  return items.reduce<Record<string,number>>((counts,item)=>({...counts,[item.category]:(counts[item.category]??0)+1}),{});
}
