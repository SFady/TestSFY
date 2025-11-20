import sql from '@/lib/db';

export async function GET(req) {
  try {
    const url = new URL(req.url);

    const result = await sql`
      select uac.id, date_claimed, usr.name as user_name, act.name as activity_name, defit_amount, participation_percentage
      from user_activities uac 
      inner join users usr on uac.user_id=usr.id
      inner join activity_type act on uac.activity_type=act.id
      order by date_claimed desc;
    `;

    // Always return a number
    return new Response(JSON.stringify({ result: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error('❌ DB error:', err);
    return new Response(JSON.stringify({ result: 0, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
