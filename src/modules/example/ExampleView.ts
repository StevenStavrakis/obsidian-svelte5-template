import { ItemView, WorkspaceLeaf } from "obsidian";
import ExampleComponent from "./components/ExampleComponent.svelte";
import { mount } from "svelte";

export class ExampleView extends ItemView {
    identifier: string;
    component!: ReturnType<typeof ExampleComponent>;

    constructor(leaf: WorkspaceLeaf, identifier: string) {
        super(leaf);
        this.identifier = identifier;
    }

    getViewType(): string {
        return this.identifier;
    }

    getDisplayText(): string {
        return "Example View";
    }

    async onOpen(): Promise<void> {
        this.component = mount(ExampleComponent, {
            target: this.containerEl,
            props: {
                prop: this.identifier,
            },
        });
    }

    async onClose(): Promise<void> {
    }
}
