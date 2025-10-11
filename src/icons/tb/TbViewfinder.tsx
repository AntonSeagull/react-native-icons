

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbViewfinder = (props: IconProps) => {

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
          <Path  d="M12 3l0 4" />
          <Path  d="M12 21l0 -3" />
          <Path  d="M3 12l4 0" />
          <Path  d="M21 12l-3 0" />
          <Path  d="M12 12l0 .01" />
        </G>
      </Svg>
    );
  }

