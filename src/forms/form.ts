import BaseForm from "./baseForm";

export default class Form extends BaseForm {
    protected formData = {
        type: "form",
        title: "title",
        content: "content",
        buttons: [] as object[]
    };
    protected formId: number;
    public constructor({ id = 0, title = "title", content = "content" }) {
        super();
        this.formId = id;
        this.formData.title = title;
        this.formData.content = content;
    }
    public getFormButtons(): object[] {
        return this.formData.buttons;
    }
    public addButton(text: string, imagePath?: string, isURL: boolean = false): this {
        const button = {};
        Object.assign(button, { text: text });
        if (imagePath) {
            Object.assign(button, {
                image: {
                    type: isURL ? "url" : "path",
                    data: imagePath
                }
            });
        }
        this.formData.buttons.push(button);
        return this;
    }
}