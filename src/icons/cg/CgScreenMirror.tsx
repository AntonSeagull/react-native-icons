

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgScreenMirror = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M5 8H19V14H16V16H21V6H3V16H8V14H5V8Z" fill="currentColor" />
          <Path d="M16.3301 19L12 13L7.66987 19H16.3301Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

