

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuView = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="1" />
          <Path  d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
          <Path  d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
          <Path  d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
        </G>
      </Svg>
    );
  }

