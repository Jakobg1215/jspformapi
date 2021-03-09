import BaseForm from "./baseForm";

export default class CustomForm extends BaseForm {
    protected formData = {
        type: "custom_form",
        title: "title",
        content: [] as object[]
    };
    protected formId!: number;
    public constructor({ id = 0, title = "title" } = {}) {
        super();
        this.formId = id;
        this.formData.title = title;
    }
    public addLabel(text: string): this {
        this.formData.content.push({ type: "label", text: text });
        return this;
    }
    public addToggle(text: string, state = false): this {
        this.formData.content.push({ type: "toggle", text: text, default: state });
        return this;
    }
    public addSlider(text: string, min: number, max: number, step = 1, state = max / 2): this {
        this.formData.content.push({ type: "slider", text: text, min: min, max: max, step: step, state: state });
        return this;
    }
    public addDropdown(text: string, options: string[], state = 0): this {
        this.formData.content.push({ type: "dropdown", text: text, options: options, default: state });
        return this;
    }
    public addInput(text: string, placeholder = "", state = ""): this {
        this.formData.content.push({ type: "input", text: text, placeholder: placeholder, default: state });
        return this;
    }
}