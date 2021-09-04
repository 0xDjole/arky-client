import { IUserActions, IUserState } from '../..'

export interface ICSliderProps {
    setUserMapDistance: IUserActions['setUserMapDistance']
    userMapDistance: IUserState['userLocationData']['userMapDistance']
    label?: string
}

export type ICSlider = (props: ICSliderProps) => JSX.Element

export interface ICSliderInterfaceProps {
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
    value: number
    label?: string
}

export type ICSliderInterface = (props: ICSliderInterfaceProps) => JSX.Element
