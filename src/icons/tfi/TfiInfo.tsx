

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiInfo = (props: IconProps) => {

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
          <Path  d="M10.8 14.276v1h-4.6v-1h1.8v-7.431h-1.75v-1h2.75v8.431h1.8zM7.988 4.045c0.848 0 1.532-0.686 1.532-1.532 0-0.847-0.685-1.534-1.532-1.534-0.849 0-1.534 0.687-1.534 1.534 0 0.846 0.686 1.532 1.534 1.532z" />
        </G>
      </Svg>
    );
  }

