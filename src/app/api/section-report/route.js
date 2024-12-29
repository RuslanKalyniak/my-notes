export async function GET(req) {
    const { searchParams } = new URL(req.url); // Отримуємо параметри запиту
    const duration = searchParams.get("duration_minutes") || "3000"; // Значення за замовчуванням: 3000

    const url = `https://marauders-map-backend-cloud-run-1081211223945.us-central1.run.app/section_visit_report/?timezone=UTC&report_lookback_duration_minutes=${duration}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch from API: ${response.statusText}`);
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error("Error in API route:", error.message);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}