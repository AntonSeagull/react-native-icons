

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutColumn3 = (props: IconProps) => {

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
          <Path  d="M0 17h5v-17h-5v17zM1 1h3v15h-3v-15zM6 17h5v-17h-5v17zM7 1h3v15h-3v-15zM12 0v17h5v-17h-5zM16 16h-3v-15h3v15z" />
        </G>
      </Svg>
    );
  }

