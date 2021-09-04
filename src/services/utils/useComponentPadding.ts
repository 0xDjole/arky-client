import POSITIONS from './positions'

const useComponenetPadding = ({
    headerPosition,
    headerHeight,
    navbarOpened,
    navbarPosition,
    headerOpened
}: any) => {
    let paddingBottom = 0
    let paddingTop = 0
    if (headerOpened && headerPosition === POSITIONS.BOTTOM) {
        paddingBottom += headerHeight
    }

    if (headerOpened && headerPosition === POSITIONS.TOP) {
        paddingTop += headerHeight
    }

    if (navbarOpened && navbarPosition === POSITIONS.BOTTOM) {
        paddingBottom += headerHeight
    }

    if (navbarOpened && navbarPosition === POSITIONS.TOP) {
        paddingTop += headerHeight
    }

    return {
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`
    }
}

export default useComponenetPadding
