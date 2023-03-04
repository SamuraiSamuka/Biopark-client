import localforage from "localforage";
import { v4 as uuid } from "uuid";

export async function getPredios(){
    let predios = await localforage.getItem("predios");
    if(!predios) predios = [];
    return predios;
}

export async function getPredio(id){
    let predios = await localforage.getItem("predios");
    let predio = predios.find(cond => cond.id === id)
    return predio ?? null;
}

export async function createPredio(){
    let id = uuid();
    let predio = { id, createdAt: Date.now(), nulo: true}
    let predios = await getPredios();
    predios.unshift(predio);
    await localforage.setItem("predios", predios)
    return predio
}

export async function updatePredio(id, updates) {
    let predios = await localforage.getItem("predios");
    let predio = predios.find(cond => cond.id === id)
    if(!predio) throw new Error("Nenhum condomínio encontrado com o id", id);
    Object.assign(predio, updates);
    await localforage.setItem("predios", predios)
    return predio
}

export async function deletePredio(id) {
    let predios = await localforage.getItem("predios")
    let indice = predios.findIndex(predio => predio.id === id);
    if (indice > -1) {
        predios.splice(indice, 1);
        await localforage.setItem("predios", predios);
        return true
    }
    return false
}