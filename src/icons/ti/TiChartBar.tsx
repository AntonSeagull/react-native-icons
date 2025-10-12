

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiChartBar = (props: IconProps) => {

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
          <Path  d="M14 4c0-1.105-.896-2-2-2s-2 .895-2 2v12h4v-12zM19 8c0-1.105-.896-2-2-2s-2 .895-2 2v8h4v-8zM9 11c0-1.105-.896-2-2-2s-2 .895-2 2v5h4v-5zM19 19h-14c-.553 0-1 .447-1 1s.447 1 1 1h14c.553 0 1-.447 1-1s-.447-1-1-1z" />
        </G>
      </Svg>
    );
  }

