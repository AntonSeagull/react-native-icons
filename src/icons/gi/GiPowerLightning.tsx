

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiPowerLightning = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M29.805 29.777L242.14 209.55H118.712l112.54 86.784H95.995l225.656 174.012-81.537-116.05 66.487.143 179.185 138.175-171.96-244.746h84.568L248.082 29.776H29.805z" fill="#000" />
        </G>
      </Svg>
    );
  }

