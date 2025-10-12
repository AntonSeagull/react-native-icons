

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuShipWheel = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="8" />
          <Circle  cx="12" cy="12" r="2.5" />
          <Path  d="M12 2v7.5" />
          <Path  d="m19 5-5.23 5.23" />
          <Path  d="M22 12h-7.5" />
          <Path  d="m19 19-5.23-5.23" />
          <Path  d="M12 14.5V22" />
          <Path  d="M10.23 13.77 5 19" />
          <Path  d="M9.5 12H2" />
          <Path  d="M10.23 10.23 5 5" />
        </G>
      </Svg>
    );
  }

