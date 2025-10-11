

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberCircleEightBold = (props: IconProps) => {

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
          <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm27.6-88.91a36,36,0,1,0-55.2,0,40,40,0,1,0,55.2,0ZM116,100a12,12,0,1,1,12,12A12,12,0,0,1,116,100Zm12,68a16,16,0,1,1,16-16A16,16,0,0,1,128,168Z" />
        </G>
      </Svg>
    );
  }

