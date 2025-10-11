

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCeOff = (props: IconProps) => {

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
          <Path d="M6.53 6.53a6.001 6.001 0 0 0 2.47 11.47" />
          <Path d="M21 6a6 6 0 0 0 -5.927 5.061l.927 .939" />
          <Path d="M16 12h5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

