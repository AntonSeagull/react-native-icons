

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiLayout2Fill = (props: IconProps) => {

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
          <Path  d="M11 3V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H11ZM21 13V20C21 20.5523 20.5523 21 20 21H13V13H21ZM20 3C20.5523 3 21 3.44772 21 4V11H13V3H20Z" />
        </G>
      </Svg>
    );
  }

