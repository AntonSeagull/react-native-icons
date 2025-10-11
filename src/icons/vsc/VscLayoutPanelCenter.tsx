

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscLayoutPanelCenter = (props: IconProps) => {

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
          <Path d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 14V2H4V14H2ZM5 10V2H11V10H5ZM12 2H14V14H12V2Z" />
        </G>
      </Svg>
    );
  }

