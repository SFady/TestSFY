import sql from '@/lib/db';

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return new Response(
        JSON.stringify({ euros: 0, defits: 0 }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const result = await sql`
      SELECT 
        COALESCE(euros, 0) AS euros,
        COALESCE(defits, 0) AS defits
      FROM users
      WHERE id = ${id};
    `;

    return new Response(
      JSON.stringify({
        euros: result[0]?.euros ?? 0,
        defits: result[0]?.defits ?? 0,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('❌ DB error:', err);
    return new Response(
      JSON.stringify({ euros: 0, defits: 0, error: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
