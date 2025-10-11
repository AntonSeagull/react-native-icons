

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLampOff = (props: IconProps) => {

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
          <Path  d="M9 20h6" />
          <Path  d="M12 20v-8" />
          <Path  d="M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

