
export function scrollInto(viewQuery: string, elFocus?: string) {
    const element: HTMLElement | null = document.querySelector(viewQuery)

    if (element) {
        element.scrollIntoView({behavior: "smooth"})
    }

    // If there is the need to focus on specific input when changing section
    if (!elFocus) {
        return
    }

    const focused: HTMLInputElement | null = document.querySelector(`${viewQuery} > ${elFocus}`)

    if (focused) {
        focused.focus()
    }
}