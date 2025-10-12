

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListChecks = (props: IconProps) => {

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
          <Path  d="M13 5h8" />
          <Path  d="M13 12h8" />
          <Path  d="M13 19h8" />
          <Path  d="m3 17 2 2 4-4" />
          <Path  d="m3 7 2 2 4-4" />
        </G>
      </Svg>
    );
  }

