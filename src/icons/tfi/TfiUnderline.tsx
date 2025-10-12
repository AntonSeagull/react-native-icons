

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiUnderline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M15 1v1h-1v6.459c0 3.032-2.467 5.5-5.5 5.5s-5.5-2.468-5.5-5.5v-6.459h-1v-1h3v1h-1v6.459c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5v-6.459h-1v-1h3zM2 16h13v-1h-13v1z" />
        </G>
      </Svg>
    );
  }

