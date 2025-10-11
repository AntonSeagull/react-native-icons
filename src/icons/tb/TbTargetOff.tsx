

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTargetOff = (props: IconProps) => {

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
          <Path d="M11.286 11.3a1 1 0 0 0 1.41 1.419" />
          <Path d="M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377 -2.611a5 5 0 0 0 -5.846 -5.836" />
          <Path d="M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683 -2.313a9 9 0 0 0 -12.076 -12.11" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

