

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSiren = (props: IconProps) => {

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
          <Path  d="M7 18v-6a5 5 0 1 1 10 0v6" />
          <Path  d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
          <Path  d="M21 12h1" />
          <Path  d="M18.5 4.5 18 5" />
          <Path  d="M2 12h1" />
          <Path  d="M12 2v1" />
          <Path  d="m4.929 4.929.707.707" />
          <Path  d="M12 12v6" />
        </G>
      </Svg>
    );
  }

