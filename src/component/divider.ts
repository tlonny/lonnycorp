import { css, node } from "@lonnycorp/htmlforge"

export class Divider implements node.Buildable {

    private readonly root : node.Element

    constructor() {
        this.root = new node.Element("div")
            .css(cls => css.css`
                .${cls} {
                    border-bottom: dashed black 1px;
                }
            `)
    }

    build() {
        return this.root.build()
    }

}
