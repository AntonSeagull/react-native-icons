

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscLayoutPanelLeft = (props: IconProps) => {

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
          <Path d="M1 2L2 1H14L15 2V14L14 15H2L1 14V2ZM2 2V10H10V2H2ZM11 2V14H14V2H11Z" />
        </G>
      </Svg>
    );
  }

