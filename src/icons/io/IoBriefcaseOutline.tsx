

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBriefcaseOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M144,128V96a32,32,0,0,1,32-32H336a32,32,0,0,1,32,32v32" />
          <Path d="M320,240v24a8,8,0,0,1-8,8H200a8,8,0,0,1-8-8V240" />
        </G>
      </Svg>
    );
  }

