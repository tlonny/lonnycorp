import { css, node } from "@lonnycorp/htmlforge"

export class Hero implements node.Buildable {

    private readonly root : node.Element

    constructor(imageURL: string) {
        this.root = new node.Element("div")
            .css(cls => css.css`
                .${cls} {
                    display: flex;
                    justify-content: center;
                }
            `)
            .child(
                new node.Element("img")
                    .attribute("src", imageURL)
                    .css(cls => css.css`
                        .${cls} {
                            height: auto;
                            max-width: 100%;
                        }
                    `)
            )
    }

    build() {
        return this.root.build()
    }

}
