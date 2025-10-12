

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCaseSensitive = (props: IconProps) => {

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
          <Circle  cx="18.5" cy="12.5" r="3.5" />
          <Path  d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
          <Path  d="M22 9v7" />
          <Path  d="M3.304 13h6.392" />
        </G>
      </Svg>
    );
  }

