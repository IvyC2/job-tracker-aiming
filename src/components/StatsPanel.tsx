import type { Application } from '../types';

interface Props {
    applications: Application[];
}

export default function StatsPanel({ applications }: Props) {
    const total = applications.length;
    const interviews = applications.filter(
        (app) => app.status === 'Interviewing' || app.status === 'Offer').length;

    const offers = applications.filter(
        (app) => app.status === 'Offer').length;

    function percent(count: number, total: number) {
        return total === 0 ? 0 : Math.round((count / total) * 100);
    }

    const interviewRate = percent(interviews, total);
    const offerRate = percent(offers, total);

    return (
        <section className="stats" aria-label="Application statistics">
            <div className="stat-card">
                <span className="stat-value">{total}</span>
                <span className="stat-label">Total</span>
            </div>
            <div className="stat-card">
                <span className="stat-value">{interviews}</span>
                <span className="stat-label">Interviews</span>
            </div>
            <div className="stat-card">
                <span className="stat-value">{interviewRate}%</span>
                <span className="stat-label">Interview rate</span>
            </div>
            <div className="stat-card">
                <span className="stat-value">{offerRate}%</span>
                <span className="stat-label">Offer rate</span>
            </div>
        </section>
    );
}