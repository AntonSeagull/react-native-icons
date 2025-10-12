

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArtboard = (props: IconProps) => {

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
          <Path  d="M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
          <Path  d="M3 8l1 0" />
          <Path  d="M3 16l1 0" />
          <Path  d="M8 3l0 1" />
          <Path  d="M16 3l0 1" />
          <Path  d="M20 8l1 0" />
          <Path  d="M20 16l1 0" />
          <Path  d="M8 20l0 1" />
          <Path  d="M16 20l0 1" />
        </G>
      </Svg>
    );
  }

