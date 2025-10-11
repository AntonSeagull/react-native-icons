

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircles = (props: IconProps) => {

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
          <Path  d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path  d="M6.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path  d="M17.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        </G>
      </Svg>
    );
  }

