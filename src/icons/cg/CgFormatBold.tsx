

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgFormatBold = (props: IconProps) => {

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
          <Path d="M11 4.504H7v14.992h6a4 4 0 0 0 .604-7.955A4 4 0 0 0 11 4.505Zm-2 2h2a2 2 0 1 1 0 4H9v-4Zm0 10.991v-4h4a2 2 0 1 1 0 4H9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

