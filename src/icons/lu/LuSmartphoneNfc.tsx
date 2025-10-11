

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSmartphoneNfc = (props: IconProps) => {

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
          <Path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" />
          <Path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" />
          <Path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
        </G>
      </Svg>
    );
  }

