

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFactory = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#BF360C" d="M41.2,5h-7.3L32,43h11L41.2,5z" />
          <Path  fill="#E64A19" d="M33,23h-4v-6l-12,6v-6L5,23v20h28V23z" />
        </G>
      </Svg>
    );
  }

