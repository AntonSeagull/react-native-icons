

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscLayoutPanel = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 10V2H14V10H2Z" />
        </G>
      </Svg>
    );
  }

