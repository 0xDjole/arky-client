export interface ICButtonProps {
    text?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
    rounded?:
        | 'rounded-none'
        | 'rounded-sm'
        | 'rounded-md'
        | 'rounded-lg'
        | 'rounded-full'
        | unknown
    children?: JSX.Element
    backgroundColor?: string
    defaultButton?: boolean
    disabled?: boolean
    style?: React.CSSProperties
}

export type ICButton = (props: ICButtonProps) => JSX.Element

export type ICButtonInterfaceProps = ICButtonProps

export type ICButtonInterface = (props: ICButtonInterfaceProps) => JSX.Element
