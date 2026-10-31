import { css, node } from "@lonnycorp/htmlforge"

export class Header implements node.Buildable {

    private readonly root : node.Element

    constructor(title: string) {
        this.root = new node.Element("h2")
            .css(cls => css.css`
                .${cls} {
                    margin: 4px 0;
                    font-size: 12px;
                    font-weight: bold;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }
            `)
            .child(new node.Text(title))
    }

    build() {
        return this.root.build()
    }

}
