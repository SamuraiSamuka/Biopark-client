import localforage from "localforage";
import { v4 as uuid } from "uuid";

export async function getApartamentos(){
    let apartamentos = await localforage.getItem("apartamentos");
    if(!apartamentos) apartamentos = [];
    return apartamentos;
}

export async function getApartamento(id){
    let apartamentos = await localforage.getItem("apartamentos");
    let apartamento = apartamentos.find(cond => cond.id === id)
    return apartamento ?? null;
}

export async function createApartamento(){
    let id = uuid();
    let apartamento = { id, createdAt: Date.now(), nulo: true}
    let apartamentos = await getApartamentos();
    apartamentos.unshift(apartamento);
    await localforage.setItem("apartamentos", apartamentos)
    return apartamento
}

export async function updateApartamento(id, updates) {
    let apartamentos = await localforage.getItem("apartamentos");
    let apartamento = apartamentos.find(cond => cond.id === id)
    if(!apartamento) throw new Error("Nenhum condomínio encontrado com o id", id);
    Object.assign(apartamento, updates);
    await localforage.setItem("apartamentos", apartamentos)
    return apartamento
}

export async function deleteApartamento(id) {
    let apartamentos = await localforage.getItem("apartamentos")
    let indice = apartamentos.findIndex(apartamento => apartamento.id === id);
    if (indice > -1) {
        apartamentos.splice(indice, 1);
        await localforage.setItem("apartamentos", apartamentos);
        return true
    }
    return false
}