

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDrone = (props: IconProps) => {

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
          <Path  d="M10 10h4v4h-4z" />
          <Path  d="M10 10l-3.5 -3.5" />
          <Path  d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
          <Path  d="M14 10l3.5 -3.5" />
          <Path  d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
          <Path  d="M14 14l3.5 3.5" />
          <Path  d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
          <Path  d="M10 14l-3.5 3.5" />
          <Path  d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
        </G>
      </Svg>
    );
  }

