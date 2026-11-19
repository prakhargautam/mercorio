import { formatDateOnly } from './model';
const sessions=[{title:'Research kickoff',date:'2026-01-01'},{title:'Prototype review',date:'2026-06-15'},{title:'Usability testing',date:'2026-12-31'}];
export function ScheduleDemo(){return <main className="card"><p className="eyebrow">PLAYTEST SCHEDULE</p><h1>Upcoming sessions</h1><p>Dates from the scheduling API are calendar dates, not timestamps.</p>{sessions.map((session)=><article key={session.title}><b>{session.title}</b><time dateTime={session.date}>{formatDateOnly(session.date)}</time></article>)}</main>}
