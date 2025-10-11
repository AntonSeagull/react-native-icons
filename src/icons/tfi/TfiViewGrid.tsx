

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiViewGrid = (props: IconProps) => {

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
          <Path  d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5zM10 0v7h7v-7h-7zM16 6h-5v-5h5v5zM0 17h7v-7h-7v7zM1 11h5v5h-5v-5zM10 17h7v-7h-7v7zM11 11h5v5h-5v-5z" />
        </G>
      </Svg>
    );
  }

