export interface IIcon {
    iconName: string,
    color?: string,
    type?: typesIcon,
    size?: string,
}

export type typesIcon =
    | '--outlined'
    | '--round'
    | '--sharp'
    | '--two-tone'
    | '';

