import ModalFormRequestPacket from "@jsprismarine/prismarine/dist/network/packet/ModalFormRequestPacket";
import type Player from "@jsprismarine/prismarine/dist/player/Player";

export default class BaseForm {
    protected formData!: any;
    protected formId = 0;
    public getFormId(): number {
        return this.formId;
    }
    public getFormTitle(): string {
        return this.formData.title;
    }
    public getFormContent(): string {
        return this.formData.content;
    }
    public setFormId(id: number): this {
        this.formId = id;
        return this;
    }
    public setFormTitle(title: string): this {
        this.formData.title = title;
        return this;
    }
    public setFormcontent(content: string): this {
        this.formData.content = content;
        return this;
    }
    public async sendFormToPlayer(player: Player): Promise<void> {
        const packet = new ModalFormRequestPacket();
        packet.formId = this.formId;
        packet.formData = JSON.stringify(this.formData);
        await player.getConnection().sendDataPacket(packet);
    }
}