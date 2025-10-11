

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPlayBackwards = (props: IconProps) => {

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
          <Path d="M2 7H5V17H2V7Z" fill="currentColor" />
          <Path d="M6 12L13.0023 7.00003V17L6 12Z" fill="currentColor" />
          <Path d="M21.0023 7.00003L14 12L21.0023 17V7.00003Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

