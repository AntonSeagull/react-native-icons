

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowsCorner = (props: IconProps) => {

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
          <Path  d="M15 9.5v5.5h-5.5v-1h3.803l-10.303-10.303v3.803h-1v-5.5h5.5v1h-3.783l10.283 10.283v-3.783h1z" />
        </G>
      </Svg>
    );
  }

