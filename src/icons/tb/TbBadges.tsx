

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBadges = (props: IconProps) => {

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
          <Path d="M17 17v-4l-5 3l-5 -3v4l5 3z" />
          <Path d="M17 8v-4l-5 3l-5 -3v4l5 3z" />
        </G>
      </Svg>
    );
  }

