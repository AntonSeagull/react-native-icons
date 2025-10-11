

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodSmileDizzy = (props: IconProps) => {

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
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path  d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
          <Path  d="M8 9l2 2" />
          <Path  d="M10 9l-2 2" />
          <Path  d="M14 9l2 2" />
          <Path  d="M16 9l-2 2" />
        </G>
      </Svg>
    );
  }

