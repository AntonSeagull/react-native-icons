

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapX = (props: IconProps) => {

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
          <Path d="M14 19.5l-5 -2.5l-6 3v-13l6 -3l6 3l6 -3v9" />
          <Path d="M9 4v13" />
          <Path d="M15 7v6.5" />
          <Path d="M22 22l-5 -5" />
          <Path d="M17 22l5 -5" />
        </G>
      </Svg>
    );
  }

