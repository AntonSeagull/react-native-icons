

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCubeSend = (props: IconProps) => {

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
          <Path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
          <Path d="M11 9.5v5.5l5 3" />
          <Path d="M16 12.545l5 -3.03" />
          <Path d="M7 9h-5" />
          <Path d="M7 12h-3" />
          <Path d="M7 15h-1" />
        </G>
      </Svg>
    );
  }

