

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiMoldova = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M60.55 44.17L181.3 16.43 341 94.41l3 89.99 36.8 10.5 5.2 69.7 33.8 9s34.5 81 31.5 81-123.8-27-123.8-27l-64.4 168-43.5-3.7 19.5-179.3-55.5-110.2z" />
        </G>
      </Svg>
    );
  }

