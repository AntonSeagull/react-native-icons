

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDraftingCompass = (props: IconProps) => {

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
          <Circle  cx="12" cy="5" r="2" />
          <Path  d="m12.99 6.74 1.93 3.44" />
          <Path  d="M19.136 12a10 10 0 0 1-14.271 0" />
          <Path  d="m21 21-2.16-3.84" />
          <Path  d="m3 21 8.02-14.26" />
        </G>
      </Svg>
    );
  }

