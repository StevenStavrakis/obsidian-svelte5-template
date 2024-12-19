import { Notice, Plugin } from "obsidian";
import type { PluginModule } from "@types";

export class ExampleModule implements PluginModule {
    identifier: string = 'example';
    plugin: Plugin;

    constructor(plugin: Plugin) {
        this.plugin = plugin;
    }

    onload(): void {
        const ribbonIconEl = this.plugin.addRibbonIcon('dice', 'Sample Plugin', (evt: MouseEvent) => {
            // Called when the user clicks the icon.
            new Notice('This is a notice!');
        });
    }

    onunload(): void {

    }

}