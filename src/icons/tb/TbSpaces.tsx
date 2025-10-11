

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSpaces = (props: IconProps) => {

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
          <Path d="M6.045 9.777a6 6 0 1 0 5.951 .023" />
          <Path d="M11.997 20.196a6 6 0 1 0 -2.948 -5.97" />
          <Path d="M17.95 9.785q .05 -.386 .05 -.785a6 6 0 1 0 -3.056 5.23" />
        </G>
      </Svg>
    );
  }

