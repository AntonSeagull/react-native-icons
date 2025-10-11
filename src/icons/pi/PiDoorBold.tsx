

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDoorBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M232,212H212V40a20,20,0,0,0-20-20H64A20,20,0,0,0,44,40V212H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM68,44H188V212H68Zm104,88a16,16,0,1,1-16-16A16,16,0,0,1,172,132Z" />
        </G>
      </Svg>
    );
  }

