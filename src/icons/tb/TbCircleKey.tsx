

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleKey = (props: IconProps) => {

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
          <Path  d="M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
          <Path  d="M12.5 11.5l-4 4l1.5 1.5" />
          <Path  d="M12 15l-1.5 -1.5" />
        </G>
      </Svg>
    );
  }

