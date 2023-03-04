import localforage from "localforage";
import { v4 as uuid } from "uuid";

export async function getCondominios(){
    let condominios = await localforage.getItem("condominios");
    if(!condominios) condominios = [];
    return condominios;
}

export async function getCondominio(id){
    let condominios = await localforage.getItem("condominios");
    let condominio = condominios.find(cond => cond.id === id)
    return condominio ?? null;
}

export async function createCondominio(){
    let id = uuid();
    let condominio = { id, createdAt: Date.now(), nulo: true}
    let condominios = await getCondominios();
    condominios.unshift(condominio);
    await localforage.setItem("condominios", condominios)
    return condominio
}

export async function updateCondominio(id, updates) {
    let condominios = await localforage.getItem("condominios");
    let condominio = condominios.find(cond => cond.id === id)
    if(!condominio) throw new Error("Nenhum condomínio encontrado com o id", id);
    Object.assign(condominio, updates);
    await localforage.setItem("condominios", condominios)
    return condominio
}

export async function deleteCondominio(id) {
    let condominios = await localforage.getItem("condominios")
    let indice = condominios.findIndex(condominio => condominio.id === id);
    if (indice > -1) {
        condominios.splice(indice, 1);
        await localforage.setItem("condominios", condominios);
        return true
    }
    return false
}