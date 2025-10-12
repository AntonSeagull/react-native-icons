

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutWidthDefaultAlt = (props: IconProps) => {

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
          <Path  d="M2 16h1v1h-1v-1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM14 17h1v-1h-1v1zM14 3h1v-1h-1v1zM14 5h1v-1h-1v1zM14 13h1v-1h-1v1zM14 7h1v-1h-1v1zM14 9h1v-1h-1v1zM14 15h1v-1h-1v1zM14 11h1v-1h-1v1zM14 0v1h1v-1h-1zM12 1h1v-1h-1v1zM6 1h1v-1h-1v1zM8 1h1v-1h-1v1zM10 1h1v-1h-1v1zM4 1h1v-1h-1v1zM2 1h1v-1h-1v1zM2 13h1v-1h-1v1zM2 15h1v-1h-1v1zM2 11h1v-1h-1v1zM2 3h1v-1h-1v1zM2 5h1v-1h-1v1zM2 7h1v-1h-1v1zM2 9h1v-1h-1v1z" />
        </G>
      </Svg>
    );
  }

