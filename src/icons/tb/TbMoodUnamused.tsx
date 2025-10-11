

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodUnamused = (props: IconProps) => {

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
          <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path d="M11 16l4 -1.5" />
          <Path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
          <Path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
        </G>
      </Svg>
    );
  }

