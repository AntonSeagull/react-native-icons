

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuHeater = (props: IconProps) => {

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
          <Path  d="M11 8c2-3-2-3 0-6" />
          <Path  d="M15.5 8c2-3-2-3 0-6" />
          <Path  d="M6 10h.01" />
          <Path  d="M6 14h.01" />
          <Path  d="M10 16v-4" />
          <Path  d="M14 16v-4" />
          <Path  d="M18 16v-4" />
          <Path  d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
          <Path  d="M5 20v2" />
          <Path  d="M19 20v2" />
        </G>
      </Svg>
    );
  }

