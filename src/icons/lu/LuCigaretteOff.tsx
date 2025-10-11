

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCigaretteOff = (props: IconProps) => {

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
          <Path  d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
          <Path  d="M18 8c0-2.5-2-2.5-2-5" />
          <Path  d="m2 2 20 20" />
          <Path  d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
          <Path  d="M22 8c0-2.5-2-2.5-2-5" />
          <Path  d="M7 12v4" />
        </G>
      </Svg>
    );
  }

