

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAlignCenterHorizontal = (props: IconProps) => {

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
          <Path  d="M2 12h20" />
          <Path  d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
          <Path  d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
          <Path  d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
          <Path  d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
        </G>
      </Svg>
    );
  }

