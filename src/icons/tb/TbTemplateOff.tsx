

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTemplateOff = (props: IconProps) => {

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
          <Path d="M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-7m-4 0h-3a1 1 0 0 1 -1 -1v-2c0 -.271 .108 -.517 .283 -.697" />
          <Path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
          <Path d="M16 12h4" />
          <Path d="M14 16h2" />
          <Path d="M14 20h6" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

