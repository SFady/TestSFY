import sql from '@/lib/db';

export async function GET(req) {
  try {
    
    const url = new URL(req.url);
    const id = Number(url.searchParams.get('id')) || 0;
    
    let result;

    if (id === 1) {
      result = await sql`
        SELECT uss.name AS name,
              SUM(COALESCE(kilometers,0)) AS kilometers,
              SUM(COALESCE(defit_amount,0)) AS defit_amount,
              SUM(COALESCE(boost,0)) AS boost
        FROM user_activities uas
        INNER JOIN users uss ON uas.user_id=uss.id
        WHERE EXTRACT(YEAR FROM uas.date_claimed) = EXTRACT(YEAR FROM CURRENT_DATE)
        GROUP BY uas.user_id, uss.name
        ORDER BY uas.user_id
      `;
    } else if (id === 2) {
      result = await sql`
        SELECT uss.name AS name,
              SUM(COALESCE(kilometers,0)) AS kilometers,
              SUM(COALESCE(defit_amount,0)) AS defit_amount,
              SUM(COALESCE(boost,0)) AS boost
        FROM user_activities uas
        INNER JOIN users uss ON uas.user_id=uss.id
        WHERE EXTRACT(MONTH FROM uas.date_claimed) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM uas.date_claimed) = EXTRACT(YEAR FROM CURRENT_DATE)
        GROUP BY uas.user_id, uss.name
        ORDER BY uas.user_id
      `;
    } else if (id === 3) {
      result = await sql`
        SELECT uss.name AS name,
              SUM(COALESCE(kilometers,0)) AS kilometers,
              SUM(COALESCE(defit_amount,0)) AS defit_amount,
              SUM(COALESCE(boost,0)) AS boost
        FROM user_activities uas
        INNER JOIN users uss ON uas.user_id=uss.id
        WHERE EXTRACT(WEEK FROM uas.date_claimed) = EXTRACT(WEEK FROM CURRENT_DATE) AND EXTRACT(MONTH FROM uas.date_claimed) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM uas.date_claimed) = EXTRACT(YEAR FROM CURRENT_DATE)
        GROUP BY uas.user_id, uss.name
        ORDER BY uas.user_id
      `;
    }
    else
    {
      result = await sql`
        SELECT uss.name AS name,
              SUM(COALESCE(kilometers,0)) AS kilometers,
              SUM(COALESCE(defit_amount,0)) AS defit_amount,
              SUM(COALESCE(boost,0)) AS boost
        FROM user_activities uas
        INNER JOIN users uss ON uas.user_id=uss.id
        GROUP BY uas.user_id, uss.name
        ORDER BY uas.user_id
      `;
    }

    const response = result.map(row => ({
      name: row.name,
      kilometers: Number(row.kilometers ?? 0),
      defit_amount: Number(row.defit_amount ?? 0),
      boost: Number(row.boost ?? 0),
    }));

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
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
