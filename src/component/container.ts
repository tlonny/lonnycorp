import { css, node } from "@lonnycorp/htmlforge"

export class Container implements node.Buildable {

    private readonly root : node.Element

    constructor() {
        this.root = new node.Element("main")
            .css(cls => css.css`
                .${cls} {
                    max-width: 640px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    gap: 12px;
                    margin: 0 auto;
                }
            `)
    }

    child(child : node.Buildable) {
        this.root.child(child)
        return this
    }

    build() {
        return this.root.build()
    }

}
