

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiWidgetized = (props: IconProps) => {

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
          <Path  d="M2 0h1v1h-1v-1zM4 1h1v-1h-1v1zM6 1h1v-1h-1v1zM8 1h1v-1h-1v1zM10 1h1v-1h-1v1zM12 1h1v-1h-1v1zM14 1h1v-1h-1v1zM2 9h1v-1h-1v1zM4 9h1v-1h-1v1zM6 9h1v-1h-1v1zM10 9h1v-1h-1v1zM12 9h1v-1h-1v1zM14 9h1v-1h-1v1zM2 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM14 17h1v-1h-1v1zM16 0v1h1v-1h-1zM16 3h1v-1h-1v1zM16 5h1v-1h-1v1zM16 7h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 15h1v-1h-1v1zM8 3h1v-1h-1v1zM8 5h1v-1h-1v1zM8 7h1v-1h-1v1zM8 9h1v-1h-1v1zM8 11h1v-1h-1v1zM8 13h1v-1h-1v1zM8 15h1v-1h-1v1zM16 17h1v-1h-1v1zM0 1h1v-1h-1v1zM0 3h1v-1h-1v1zM0 5h1v-1h-1v1zM0 7h1v-1h-1v1zM0 9h1v-1h-1v1zM0 11h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 17h1v-1h-1v1z" />
        </G>
      </Svg>
    );
  }

