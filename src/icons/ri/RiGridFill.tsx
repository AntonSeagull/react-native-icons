

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiGridFill = (props: IconProps) => {

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
          <Path  d="M14 10V14H10V10H14ZM16 10H21V14H16V10ZM14 21H10V16H14V21ZM16 21V16H21V20C21 20.5523 20.5523 21 20 21H16ZM14 3V8H10V3H14ZM16 3H20C20.5523 3 21 3.44772 21 4V8H16V3ZM8 10V14H3V10H8ZM8 21H4C3.44772 21 3 20.5523 3 20V16H8V21ZM8 3V8H3V4C3 3.44772 3.44772 3 4 3H8Z" />
        </G>
      </Svg>
    );
  }

