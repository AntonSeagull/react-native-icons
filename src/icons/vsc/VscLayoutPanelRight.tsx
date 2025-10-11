

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscLayoutPanelRight = (props: IconProps) => {

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
          <Path d="M1 2L2 1H14L15 2V14L14 15H2L1 14V2ZM2 2V14H5V2H2ZM6 2V10H14V2H6Z" />
        </G>
      </Svg>
    );
  }

