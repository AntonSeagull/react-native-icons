

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLanguageKatakana = (props: IconProps) => {

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
          <Path  d="M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293" />
          <Path  d="M8 8c0 1.5 .5 3 -2 5" />
          <Path  d="M12 20l4 -9l4 9" />
          <Path  d="M19.1 18h-6.2" />
        </G>
      </Svg>
    );
  }

