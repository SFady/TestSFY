import sql from '@/lib/db';

export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  try {
    const result = await sql`
      SELECT sum(defit_amount * participation_percentage / 100) AS total 
      FROM user_activities 
      WHERE user_id = ${id};
    `;
    return Response.json({ result: result[0].total }); // Return just the number
  } catch (err) {
    console.error(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
