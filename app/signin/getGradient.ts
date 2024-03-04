
export function getGradient(colors: Array<string>) : string {
    const linearData = colors.map((color: string, index: number) => {
        //if (index + 1 != colors.length) return color + ", "
        return color
    })

    return `linear-gradient(to right, ${linearData})`
}
