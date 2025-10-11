

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBallpenOff = (props: IconProps) => {

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
          <Path d="M14 6l7 7l-2 2" />
          <Path d="M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4l4.172 -4.172" />
          <Path d="M16 12l4.414 -4.414a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-4.414 4.414" />
          <Path d="M4 20l1.768 -1.768" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

