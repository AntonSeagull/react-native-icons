

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiPorcelainVase = (props: IconProps) => {

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
          <Path  d="M304 30c-32 64-22.35 180.063 0 208 42.406 53.007 80 80 80 128 0 32-16 80-48 112v16H176v-16c-32.002-31.995-48-80-48-112 0-48 37.594-74.993 80-128 22.35-27.937 32-144 0-208 48-16 48-16 96 0z" />
        </G>
      </Svg>
    );
  }

