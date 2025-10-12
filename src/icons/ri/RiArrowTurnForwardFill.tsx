

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiArrowTurnForwardFill = (props: IconProps) => {

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
          <Path  d="M17 8V13C17 16.3137 14.3137 19 11 19C7.68629 19 5 16.3137 5 13V4H3V13C3 17.4183 6.58172 21 11 21C15.4183 21 19 17.4183 19 13V8H23L18 2L13 8H17Z" />
        </G>
      </Svg>
    );
  }

