

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCog = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="2" />
          <Circle  cx="12" cy="12" r="8" />
          <Path  d="M11 10.27 7 3.34" />
          <Path  d="m11 13.73-4 6.93" />
          <Path  d="M12 22v-2" />
          <Path  d="M12 2v2" />
          <Path  d="M14 12h8" />
          <Path  d="m17 20.66-1-1.73" />
          <Path  d="m17 3.34-1 1.73" />
          <Path  d="M2 12h2" />
          <Path  d="m20.66 17-1.73-1" />
          <Path  d="m20.66 7-1.73 1" />
          <Path  d="m3.34 17 1.73-1" />
          <Path  d="m3.34 7 1.73 1" />
        </G>
      </Svg>
    );
  }

