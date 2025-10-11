

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTransitionRight = (props: IconProps) => {

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
          <Path  d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
          <Path  d="M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z" />
          <Path  d="M9 12h8" />
          <Path  d="M14 15l3 -3l-3 -3" />
        </G>
      </Svg>
    );
  }

