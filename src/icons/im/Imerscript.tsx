

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imerscript = (props: IconProps) => {

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
          <Path  d="M12 3.219v0.781h2v1h-3v-2.281l2-0.938v-0.781h-2v-1h3v2.281zM10.563 4h-2.125l-2.938 2.938-2.938-2.938h-2.125l4 4-4 4h2.125l2.938-2.938 2.938 2.938h2.125l-4-4z" />
        </G>
      </Svg>
    );
  }

