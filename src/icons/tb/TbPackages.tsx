

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPackages = (props: IconProps) => {

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
          <Path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
          <Path d="M2 13.5v5.5l5 3" />
          <Path d="M7 16.545l5 -3.03" />
          <Path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
          <Path d="M12 19l5 3" />
          <Path d="M17 16.5l5 -3" />
          <Path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
          <Path d="M7 5.03v5.455" />
          <Path d="M12 8l5 -3" />
        </G>
      </Svg>
    );
  }

