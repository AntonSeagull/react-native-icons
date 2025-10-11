

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiShiftLeft = (props: IconProps) => {

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
          <Path  d="M17 9.001h-11.292l3.646 3.646-0.707 0.707-4.854-4.854 4.854-4.854 0.707 0.707-3.648 3.648h11.294v1zM0 17h1v-17h-1v17z" />
        </G>
      </Svg>
    );
  }

