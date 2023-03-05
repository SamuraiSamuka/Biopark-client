import localforage from "localforage";
import { v4 as uuid } from "uuid";

export async function getLocatarios(){
    let locatarios = await localforage.getItem("locatarios");
    if(!locatarios) locatarios = [];
    return locatarios;
}

export async function getLocatario(id){
    let locatarios = await localforage.getItem("locatarios");
    let locatario = locatarios.find(cond => cond.id === id)
    return locatario ?? null;
}

export async function createLocatario(){
    let id = uuid();
    let locatario = { id, createdAt: Date.now(), nulo: true}
    let locatarios = await getLocatarios();
    locatarios.unshift(locatario);
    await localforage.setItem("locatarios", locatarios)
    return locatario
}

export async function updateLocatario(id, updates) {
    let locatarios = await localforage.getItem("locatarios");
    let locatario = locatarios.find(cond => cond.id === id)
    if(!locatario) throw new Error("Nenhum condomínio encontrado com o id", id);
    Object.assign(locatario, updates);
    await localforage.setItem("locatarios", locatarios)
    return locatario
}

export async function deleteLocatario(id) {
    let locatarios = await localforage.getItem("locatarios")
    let indice = locatarios.findIndex(locatario => locatario.id === id);
    if (indice > -1) {
        locatarios.splice(indice, 1);
        await localforage.setItem("locatarios", locatarios);
        return true
    }
    return false
}