import axios from "axios";
import { redirect } from "react-router-dom";
import { deleteCondominio } from "../../serverCond";

export async function action({params}) {
    const condominio = await (await axios.delete(`http://localhost:3030/condominios/${params.condId}`)).data
    console.log(condominio)
    return redirect("/condominios");
}