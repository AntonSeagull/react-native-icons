

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRainbowOff = (props: IconProps) => {

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
          <Path d="M22 17c0 -5.523 -4.477 -10 -10 -10c-.308 0 -.613 .014 -.914 .041m-3.208 .845a10 10 0 0 0 -5.878 9.114" />
          <Path d="M11.088 11.069a6 6 0 0 0 -5.088 5.931" />
          <Path d="M14 17a2 2 0 1 0 -4 0" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

