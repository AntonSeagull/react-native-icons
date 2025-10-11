

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcElectricity = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M33.7,5L22,17l15,5L21.3,36.7l5.1,2.8L12,43l2.7-14.8l2.9,5.1L27,24l-15-5L25,5H33.7z" fill="#00BCD4" />
        </G>
      </Svg>
    );
  }

