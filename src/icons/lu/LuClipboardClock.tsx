

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuClipboardClock = (props: IconProps) => {

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
          <Path  d="M16 14v2.2l1.6 1" />
          <Path  d="M16 4h2a2 2 0 0 1 2 2v.832" />
          <Path  d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
        </G>
      </Svg>
    );
  }

