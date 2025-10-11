

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquaresSubtract = (props: IconProps) => {

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
          <Path  d="M10 22a2 2 0 0 1-2-2" />
          <Path  d="M16 22h-2" />
          <Path  d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" />
          <Path  d="M20 8a2 2 0 0 1 2 2" />
          <Path  d="M22 14v2" />
          <Path  d="M22 20a2 2 0 0 1-2 2" />
        </G>
      </Svg>
    );
  }

