

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFlickr = (props: IconProps) => {

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
          <Path  d="M7.295 8.5c0 2.014-1.634 3.647-3.646 3.647-2.015 0-3.649-1.633-3.649-3.647s1.634-3.647 3.649-3.647c2.012 0 3.646 1.633 3.646 3.647zM17 8.5c0 2.014-1.634 3.647-3.649 3.647-2.012 0-3.646-1.634-3.646-3.647s1.634-3.647 3.646-3.647c2.015 0 3.649 1.633 3.649 3.647zM16 8.5c0-1.46-1.188-2.647-2.649-2.647-1.459 0-2.646 1.188-2.646 2.647s1.187 2.647 2.646 2.647c1.461 0 2.649-1.187 2.649-2.647z" />
        </G>
      </Svg>
    );
  }

