

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSleevelessTop = (props: IconProps) => {

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
          <Path  d="M320 32l32 16c0 32 16 48 32 96 0 0 16 32.7 16 48 0 48-16 96-32 144s32 96 48 160H96c16-64 64-112 48-160s-32-96-32-144c0-16 16-48 16-48 16-48 32-64 32-96l32-16c0 64 32 144 64 144s64-80 64-144z" />
        </G>
      </Svg>
    );
  }

