import type { RaknetEncapsulatedPacketEvent } from "@jsprismarine/prismarine/dist/events/Events";
import type PluginApi from "@jsprismarine/prismarine/dist/plugin/api/versions/1.0/PluginApi";
import BatchPacket from "./BatchPacket";

export default class FormResponseEvent {
    public api: PluginApi;
    public constructor(api: PluginApi) {
        this.api = api;
        this.api.getEventManager().on("raknetEncapsulatedPacket", async (event: RaknetEncapsulatedPacketEvent) => {
            const player = this.api.getServer().getPlayerManager().getPlayer(`${event.getInetAddr().getAddress()}:${event.getInetAddr().getPort()}`) ?? null;
            try {
                const batched = new BatchPacket(this.api.getServer().getConfig(), event.getPacket().buffer);
                batched.decode();
                for (const buf of batched.getPackets()) {
                    const pid = buf[0];
                    if (!this.api.getServer().getPacketRegistry().getPackets().has(pid)) {
                        continue;
                    }
                    const packet = new (this.api.getServer().getPacketRegistry().getPackets().get(buf[0]))(buf);
                    try {
                        packet.decode();
                    } catch (error) {
                        continue;
                    }
                    try {
                        const event = {
                            id: packet.formId,
                            data: JSON.parse(packet.formData),
                            sender: player
                        }
                        if (event.data === null) return;
                        await this.api.getEventManager().getCustomEventManager().emit("FormResponse", event);
                    } catch (error) { }
                }
            } catch (error) { }
        });
    }
}