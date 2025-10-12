

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Immbleupon = (props: IconProps) => {

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
          <Path  d="M8 5c-0.55 0-1 0.45-1 1v4c0 1.653-1.347 3-3 3s-3-1.347-3-3v-2h2v2c0 0.55 0.45 1 1 1s1-0.45 1-1v-4c0-1.653 1.347-3 3-3s3 1.347 3 2.781v0.969l-1.281 0.375-0.719-0.375v-0.969c0-0.331-0.45-0.781-1-0.781z" />
          <Path  d="M15 10c0 1.653-1.347 3-3 3s-3-1.347-3-3.219v-1.938l0.719 0.375 1.281-0.375v1.938c0 0.769 0.45 1.219 1 1.219s1-0.45 1-1v-2h2v2z" />
        </G>
      </Svg>
    );
  }

