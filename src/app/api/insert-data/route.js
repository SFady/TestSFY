import sql from '@/lib/db';

export async function POST(req) {
  try {

    const formData = await req.formData();

    const user_id = formData.get("user_id");

    const rawDate = formData.get("date_claimed"); // "25/12/2025"
    const [day, month, year] = rawDate.split("/");
    const date_claimed = `${year}-${month}-${day}`;

    const defit_amount = formData.get("defit_amount");
    const activity_type = formData.get("activity_type");
    const participation_percentage = formData.get("participation_percentage");
    const kilometers = formData.get("kilometers");

//     const activityResult = await sql`
//   SELECT id FROM activity_type WHERE name = ${activityName} LIMIT 1;
// `;

//     const activity_type = activityResult[0]?.id;

    const result = await sql`
      INSERT INTO user_activities (user_id, date_claimed, defit_amount, activity_type, participation_percentage, kilometers) 
        VALUES ( ${user_id}, ${date_claimed}, ${defit_amount}, ${activity_type}, ${participation_percentage}, ${kilometers});
    `;

    return Response.json({ message: '✅ Insert OK', result: result[0] });

  } catch (err) {
    console.error('❌ DB error:', err);
    return new Response(JSON.stringify({ result: 0, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

