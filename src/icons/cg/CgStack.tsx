

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgStack = (props: IconProps) => {

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
          <Path d="M20 4V16H22V2H8V4H20Z" fill="currentColor" />
          <Path d="M2 8V22H16V8H2ZM14 10H4V20H14V10Z" fill="currentColor" />
          <Path d="M17 7H5V5H19V19H17V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

