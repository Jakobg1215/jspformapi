import BaseForm from "./baseForm";

export default class ModalForm extends BaseForm {
    protected formData = {
        type: "modal",
        title: "title",
        content: "content",
        button1: "button1",
        button2: "button2"
    };
    protected formId!: number;
    public getButton1(): string {
        return this.formData.button1;
    }
    public getButton2(): string {
        return this.formData.button2;
    }
    public setButton1(text: string): this {
        Object.assign(this.formData, { button1: text });
        return this;
    }
    public setButton2(text: string): this {
        Object.assign(this.formData, { button2: text });
        return this;
    }
}