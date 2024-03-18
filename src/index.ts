// src/index.ts
import * as xlsx from 'xlsx';
//import * as path from 'path';

export function readExcelData(filePath: string): Record<string, any>[] {
    // const workbook = xlsx.readFile(path.resolve(__dirname, filePath));
    // const sheetName = workbook.SheetNames[0];
    // const worksheet = workbook.Sheets[sheetName];
    const _datum = { name: "servio", lastName: "palacios" };
    let _data: Record<string, any>[] = [];
    _data.push(_datum);

    //const data: Record<string, any>[] = xlsx.utils.sheet_to_json(worksheet);
    //const data: Record<string, any>[] = _data;
    console.log(_data);
    return _data;
}
