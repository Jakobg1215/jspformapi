import BaseForm from "./baseForm";

export default class ModalForm extends BaseForm {
    protected formData = {
        type: "modal",
        title: "title",
        content: "content",
        button1: "button1",
        button2: "button2"
    };
    protected formId: number;
    public constructor({ id = 0, title = "title", content = "content", button1 = "button1", button2 = "button2" }) {
        super();
        this.formId = id;
        this.formData.title = title;
        this.formData.content = content;
        this.formData.button1 = button1;
        this.formData.button2 = button2;
    }
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