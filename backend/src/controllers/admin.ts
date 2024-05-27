import { Request, Response } from 'express';
import pregunta from '../Schema/pregunta';
import User from "../Schema/user";

interface MonthlyResult {
    month: string;
    count: number;
}

function getNextMonth(year: number, month: number): { year: number, month: number } {
    if (month === 12) {
        return { year: year + 1, month: 1 };
    } else {
        return { year: year, month: month + 1 };
    }
}
function formatDate(year: number, month: number, day: number): string {
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
}
async function getDataCount(tipo: string, date_begin?: string, date_end?: string): Promise<number> {
    if (!tipo || (tipo !== "usuarios" && tipo !== "preguntas")) {
        throw new Error("Tipo de datos faltantes o inválido");
    }
    let query: any = {};

    if (date_begin && date_end) {
        query.date = { $gte: new Date(date_begin), $lte: new Date(date_end) };
    }

    let dataCount: number;

    if (tipo === "preguntas") {
        dataCount = await pregunta.countDocuments(query);
    } else {
        dataCount = await User.countDocuments(query);
    }

    return dataCount;
}

export async function getData(req: Request, res: Response) {
    const { tipo } = req.params;
    const body = req.body as { date_begin?: string, date_end?: string };

    try {
        const dataCount = await getDataCount(tipo, body.date_begin, body.date_end);
        return res.status(201).json({ count: dataCount });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}

export async function getMonthly(req: Request, res: Response) {
    const { tipo } = req.params;
    const body = req.body as { date_begin?: string, date_end?: string };

    if (!tipo || (tipo !== "usuarios" && tipo !== "preguntas")) {
        return res.status(403).json({ message: "Tipo faltante o inválido" });
    }

    if (!body || !body.date_begin || !body.date_end) {
        return res.status(400).json({ message: 'Fechas faltantes!' });
    }

    const startDate = new Date(body.date_begin);
    const endDate = new Date(body.date_end);

    let currentYear = startDate.getFullYear();
    let currentMonth = startDate.getMonth() + 1; // JavaScript months are 0-based, so add 1

    const results: MonthlyResult[] = []; // Explicitly define the type

    while (currentYear < endDate.getFullYear() || (currentYear === endDate.getFullYear() && currentMonth <= (endDate.getMonth() + 1))) {
        const monthStart = formatDate(currentYear, currentMonth, 1);
        const monthEnd = new Date(currentYear, currentMonth, 0); // 0th day of the next month gives the last day of the current month
        const monthEndStr = formatDate(currentYear, currentMonth, monthEnd.getDate());

        try {
            const count = await getDataCount(tipo, monthStart, monthEndStr);
            results.push({ month: `${currentYear}-${currentMonth < 10 ? '0' : ''}${currentMonth}`, count: count });
        } catch (error) {
            return res.status(500).json({ message: "Error retrieving data", error });
        }

        const nextMonth = getNextMonth(currentYear, currentMonth);
        currentYear = nextMonth.year;
        currentMonth = nextMonth.month;
    }

    return res.status(200).json(results);
}
