import { css, node } from "@lonnycorp/htmlforge"

export class Nav implements node.Buildable {

    private readonly root : node.Element

    constructor(title: string) {
        this.root = new node.Element("div")
            .css(cls => css.css`
                .${cls} {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }
            `)
            .child(
                new node.Element("div")
                    .css(cls => css.css`
                        .${cls} {
                            background: black;
                            color: white;
                        }
                    `)
                    .child(new node.Text(title))
            )
    }

    build() {
        return this.root.build()
    }

}
