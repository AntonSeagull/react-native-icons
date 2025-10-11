

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPresentationOff = (props: IconProps) => {

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
          <Path  d="M3 4h1m4 0h13" />
          <Path  d="M4 4v10a2 2 0 0 0 2 2h10m3.42 -.592c.359 -.362 .58 -.859 .58 -1.408v-10" />
          <Path  d="M12 16v4" />
          <Path  d="M9 20h6" />
          <Path  d="M8 12l2 -2m4 0l2 -2" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

