import { css, node } from "@lonnycorp/htmlforge"

export type AnchorParams = {
    href: string,
    text: string,
}

export class Anchor implements node.Buildable {

    private readonly root : node.Element

    constructor(params: AnchorParams) {
        this.root = new node.Element("a")
            .attribute("href", params.href)
            .css(cls => css.css`
                .${cls} { color: blue; }
                .${cls}:hover {
                    background: blue;
                    color: white;
                }
            `)
            .child(new node.Text(params.text))
    }

    build() {
        return this.root.build()
    }

}
