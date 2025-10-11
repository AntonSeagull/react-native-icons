

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEaseInControlPoint = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 19c8 0 18 -16 18 -16" />
          <Path d="M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
          <Path d="M17 19h-2" />
          <Path d="M12 19h-2" />
        </G>
      </Svg>
    );
  }

