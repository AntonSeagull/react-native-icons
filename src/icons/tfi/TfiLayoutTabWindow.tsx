

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutTabWindow = (props: IconProps) => {

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
          <Path  d="M12 2h-12v14h17v-14h-5zM16 3v2h-4v-2h4zM11 3v2h-5v-2h5zM1 3h4v2h-4v-2zM16 15h-15v-9h15v9z" />
        </G>
      </Svg>
    );
  }

