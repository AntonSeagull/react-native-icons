

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCut = (props: IconProps) => {

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
          <Path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M9.15 14.85l8.85 -10.85" />
          <Path d="M6 4l8.85 10.85" />
        </G>
      </Svg>
    );
  }

