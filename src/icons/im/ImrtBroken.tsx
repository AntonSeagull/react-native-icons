

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImrtBroken = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M11.8 1c2.318 0 4.2 1.882 4.2 4.2 0 4.566-4.935 5.982-8 10.616-3.243-4.663-8-5.9-8-10.616 0-2.319 1.882-4.2 4.2-4.2 0.943 0 1.812 0.43 2.512 1.060l-1.213 1.94 3.5 2-2 5 5.5-6-3.5-2 0.967-1.451c0.553-0.34 1.175-0.549 1.833-0.549z" />
        </G>
      </Svg>
    );
  }

