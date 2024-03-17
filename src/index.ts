// src/index.ts
import * as xlsx from 'xlsx';
import * as path from 'path';

export function readExcelData(filePath: string): Record<string, any>[] {
    const workbook = xlsx.readFile(path.resolve(__dirname, filePath));
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: Record<string, any>[] = xlsx.utils.sheet_to_json(worksheet);
    return data;
}
