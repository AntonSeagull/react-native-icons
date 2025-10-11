

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBounceLeft = (props: IconProps) => {

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
          <Path d="M20 15.5c-3 -1 -5.5 -.5 -8 4.5c-.5 -3 -1.5 -5.5 -3 -8" />
          <Path d="M6 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
        </G>
      </Svg>
    );
  }

