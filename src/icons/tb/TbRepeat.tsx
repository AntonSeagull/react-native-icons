

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRepeat = (props: IconProps) => {

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
          <Path  d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
          <Path  d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
        </G>
      </Svg>
    );
  }

