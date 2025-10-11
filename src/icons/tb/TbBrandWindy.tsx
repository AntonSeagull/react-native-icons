

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandWindy = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9 4c0 5.5 -.33 16 4 16s7.546 -11.27 8 -13" />
          <Path  d="M3 4c.253 5.44 1.449 16 5.894 16c4.444 0 8.42 -10.036 9.106 -14" />
        </G>
      </Svg>
    );
  }

