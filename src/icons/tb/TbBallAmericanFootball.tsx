

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBallAmericanFootball = (props: IconProps) => {

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
          <Path d="M15 9l-6 6" />
          <Path d="M10 12l2 2" />
          <Path d="M12 10l2 2" />
          <Path d="M8 21a5 5 0 0 0 -5 -5" />
          <Path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" />
          <Path d="M16 3a5 5 0 0 0 5 5" />
        </G>
      </Svg>
    );
  }

