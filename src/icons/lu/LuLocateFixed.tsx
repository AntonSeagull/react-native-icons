

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLocateFixed = (props: IconProps) => {

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
          <Line  x1="2" x2="5" y1="12" y2="12" />
          <Line  x1="19" x2="22" y1="12" y2="12" />
          <Line  x1="12" x2="12" y1="2" y2="5" />
          <Line  x1="12" x2="12" y1="19" y2="22" />
        </G>
      </Svg>
    );
  }

