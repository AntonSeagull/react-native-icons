

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathMaxMin = (props: IconProps) => {

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
          <Path d="M15 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M3 14s.605 -5.44 2.284 -7.862m3.395 .026c2.137 2.652 4.547 9.113 6.68 11.719" />
          <Path d="M18.748 18.038c.702 -.88 1.452 -3.56 2.252 -8.038" />
        </G>
      </Svg>
    );
  }

