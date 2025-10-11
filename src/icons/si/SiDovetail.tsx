

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiDovetail = (props: IconProps) => {

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
          <Path d="M6.75 0 1.5 3l5.25 3v6L12 9V3Zm0 12L1.5 15l5.25 3v6L12 21v-6Zm10.5-6L12 8.966 17.25 12v6l5.25-3V9Z" />
        </G>
      </Svg>
    );
  }

