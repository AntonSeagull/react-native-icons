

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAntenna = (props: IconProps) => {

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
          <Path  d="M2 12 7 2" />
          <Path  d="m7 12 5-10" />
          <Path  d="m12 12 5-10" />
          <Path  d="m17 12 5-10" />
          <Path  d="M4.5 7h15" />
          <Path  d="M12 16v6" />
        </G>
      </Svg>
    );
  }

