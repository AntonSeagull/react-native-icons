

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSd = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M2 2C2 0.895431 2.89543 0 4 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893L21.7071 4.29289C21.8946 4.48043 22 4.73478 22 5V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM16.5858 2L4 2V22H20V5.41421L16.5858 2ZM5 7V3H7V7H5ZM8 3V7H10V3H8ZM11 7V3H13V7H11ZM14 5V7H16V5H14Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

