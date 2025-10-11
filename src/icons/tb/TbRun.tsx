

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRun = (props: IconProps) => {

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
          <Path  d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M4 17l5 1l.75 -1.5" />
          <Path  d="M15 21l0 -4l-4 -3l1 -6" />
          <Path  d="M7 12l0 -3l5 -1l3 3l3 1" />
        </G>
      </Svg>
    );
  }

