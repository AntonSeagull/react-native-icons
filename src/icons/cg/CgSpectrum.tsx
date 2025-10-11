

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSpectrum = (props: IconProps) => {

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
          <Path d="M12 16H16C16 11.5817 12.4183 8 8 8V12C10.2091 12 12 13.7909 12 16Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

