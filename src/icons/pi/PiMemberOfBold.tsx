

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMemberOfBold = (props: IconProps) => {

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
          <Path d="M200,140H61.08A68.1,68.1,0,0,0,128,196h72a12,12,0,0,1,0,24H128a92,92,0,0,1,0-184h72a12,12,0,0,1,0,24H128a68.1,68.1,0,0,0-66.92,56H200a12,12,0,0,1,0,24Z" />
        </G>
      </Svg>
    );
  }

