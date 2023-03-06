import localforage from "localforage";
import { v4 as uuuid } from "uuid";

export async function getCondominios(){
    let condominios = await localforage.getItem("condominios");
    if(!condominios) condominios = [];
    return condominios;
}

export async function getCondominio(uuid){
    let condominios = await localforage.getItem("condominios");
    let condominio = condominios.find(cond => cond.uuid === uuid)
    return condominio ?? null;
}

export async function createCondominio(){
    let uuid = uuuid();
    let condominio = { uuid, createdAt: Date.now(), nulo: true}
    let condominios = await getCondominios();
    condominios.unshift(condominio);
    await localforage.setItem("condominios", condominios)
    return condominio
}

export async function updateCondominio(uuid, updates) {
    let condominios = await localforage.getItem("condominios");
    let condominio = condominios.find(cond => cond.uuid === uuid)
    if(!condominio) throw new Error("Nenhum condomínio encontrado com o uuid", uuid);
    Object.assign(condominio, updates);
    await localforage.setItem("condominios", condominios)
    return condominio
}

export async function deleteCondominio(uuid) {
    let condominios = await localforage.getItem("condominios")
    let indice = condominios.findIndex(condominio => condominio.uuid === uuid);
    if (indice > -1) {
        condominios.splice(indice, 1);
        await localforage.setItem("condominios", condominios);
        return true
    }
    return false
}