

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSunDim = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="4" />
          <Path  d="M12 4h.01" />
          <Path  d="M20 12h.01" />
          <Path  d="M12 20h.01" />
          <Path  d="M4 12h.01" />
          <Path  d="M17.657 6.343h.01" />
          <Path  d="M17.657 17.657h.01" />
          <Path  d="M6.343 17.657h.01" />
          <Path  d="M6.343 6.343h.01" />
        </G>
      </Svg>
    );
  }

