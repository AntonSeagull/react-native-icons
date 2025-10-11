

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowMoveLeft = (props: IconProps) => {

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
          <Path  d="M13 12h-10" />
          <Path  d="M6 15l-3 -3l3 -3" />
          <Path  d="M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0z" />
        </G>
      </Svg>
    );
  }

