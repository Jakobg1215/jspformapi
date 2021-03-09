import Form from "./forms/form";
import ModalForm from "./forms/modalForm";
import CustomForm from "./forms/customForm";
import type Player from "@jsprismarine/prismarine/dist/player/Player";
import ModalFormRequestPacket from "@jsprismarine/prismarine/dist/network/packet/ModalFormRequestPacket";
import FormResponceEvent from "./events/formResponceEvent";

async function sendRawToPlayer(player: Player, id: number, data: string): Promise<void> {
    const packet = new ModalFormRequestPacket();
    packet.formId = id;
    packet.formData = JSON.stringify(data);
    await player.getConnection().sendDataPacket(packet);
}

export {
    Form,
    ModalForm,
    CustomForm,
    sendRawToPlayer,
    FormResponceEvent
}