

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiStatsDown = (props: IconProps) => {

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
          <Path  d="M5.166 8.803l-4.371-3.956 0.67-0.741 3.773 3.413 4.204-3.026 5.593 6.25v-2.285h1v4.036h-4.036v-1h2.366l-5.069-5.665-4.13 2.974zM0 16v1h17v-1h-17z" />
        </G>
      </Svg>
    );
  }

