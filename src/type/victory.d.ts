// these type below only declare for demo use
// in the real project we need to modify @types/victory and make the pull request to the official repo

declare module 'victory' {
  export interface VictoryPolarAxisProps extends VictoryAxisProps {}

  export class VictoryPolarAxis extends React.Component<
    VictoryPolarAxisProps,
    any
  > {}
}
