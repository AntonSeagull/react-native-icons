

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShapeOff = (props: IconProps) => {

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
          <Path  d="M3.575 3.597a2 2 0 0 0 2.849 2.808" />
          <Path  d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M17.574 17.598a2 2 0 0 0 2.826 2.83" />
          <Path  d="M5 7v10" />
          <Path  d="M9 5h8" />
          <Path  d="M7 19h10" />
          <Path  d="M19 7v8" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

