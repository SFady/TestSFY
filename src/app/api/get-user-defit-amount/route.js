import sql from '@/lib/db';

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const result = await sql`
      SELECT sum(defit_amount * participation_percentage / 100) AS total
      FROM user_activities
      WHERE user_id = ${id};
    `;

    // Always return a number
    return new Response(JSON.stringify({ result: result[0]?.total ?? 0 }), {
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
