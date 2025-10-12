

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMist = (props: IconProps) => {

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
          <Path  d="M5 5h3m4 0h9" />
          <Path  d="M3 10h11m4 0h1" />
          <Path  d="M5 15h5m4 0h7" />
          <Path  d="M3 20h9m4 0h3" />
        </G>
      </Svg>
    );
  }

