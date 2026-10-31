import { css, node } from "@lonnycorp/htmlforge"

export const shim = (body : node.Element) => {
    body
        .css(cls => css.css`
            .${cls} {
                color: black;
                font-family: monospace;
                display: flex;
                flex-direction: column;
                margin: 0px;
                height: 100vh;
                padding: 0px;
                font-size: 12px;
                box-sizing: border-box;
            }
        `)
}
