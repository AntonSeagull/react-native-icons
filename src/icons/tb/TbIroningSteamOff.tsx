

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIroningSteamOff = (props: IconProps) => {

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
          <Path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15" />
          <Path d="M16 16h-13a7 7 0 0 1 6.056 -6.937" />
          <Path d="M13 9h6.8" />
          <Path d="M12 19v2" />
          <Path d="M8 19l-1 2" />
          <Path d="M16 19l1 2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

