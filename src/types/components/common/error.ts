export interface ICErrorProps {
    text: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}

export type ICError = (props: ICErrorProps) => JSX.Element

export type ICErrorInterfaceProps = ICErrorProps

export type ICErrorInterface = (props: ICErrorInterfaceProps) => JSX.Element
