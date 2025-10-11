

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTransitionLeft = (props: IconProps) => {

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
          <Path  d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" />
          <Path  d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z" />
          <Path  d="M15 12h-8" />
          <Path  d="M10 9l-3 3l3 3" />
        </G>
      </Svg>
    );
  }

