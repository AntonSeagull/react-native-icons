

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodSadDizzy = (props: IconProps) => {

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
          <Path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
          <Path d="M8 9l2 2" />
          <Path d="M10 9l-2 2" />
          <Path d="M14 9l2 2" />
          <Path d="M16 9l-2 2" />
        </G>
      </Svg>
    );
  }

