

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFenceOff = (props: IconProps) => {

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
          <Path d="M12 12h-8v4h12m4 0v-4h-4" />
          <Path d="M6 16v4h4v-4" />
          <Path d="M10 12v-2m0 -4l-2 -2m-2 2v6" />
          <Path d="M14 16v4h4v-2" />
          <Path d="M18 12v-6l-2 -2l-2 2v4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

