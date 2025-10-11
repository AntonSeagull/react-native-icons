

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScreenShareOff = (props: IconProps) => {

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
          <Path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
          <Path d="M7 20l10 0" />
          <Path d="M9 16l0 4" />
          <Path d="M15 16l0 4" />
          <Path d="M17 8l4 -4m-4 0l4 4" />
        </G>
      </Svg>
    );
  }

