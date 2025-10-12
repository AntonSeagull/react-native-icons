

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImgleDrive = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M6.844 10l-2.884 5h9.072l2.884-5z" />
          <Path  d="M15.506 9l-4.619-8h-5.775l4.619 8z" />
          <Path  d="M4.534 2l-4.534 7.856 2.888 5 4.534-7.856z" />
        </G>
      </Svg>
    );
  }

