import { redirect } from "react-router-dom";
import { deletePredio } from "../../serverPred";

export async function action({params}) {
    await deletePredio(params.predId);
    return redirect("/predios");
}