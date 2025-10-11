

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAnchorSimpleBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M224,108H200a12,12,0,0,0,0,24h11.15A84.21,84.21,0,0,1,140,203.14V97.94a36,36,0,1,0-24,0v105.2A84.21,84.21,0,0,1,44.85,132H56a12,12,0,0,0,0-24H32a12,12,0,0,0-12,12,108,108,0,0,0,216,0A12,12,0,0,0,224,108ZM128,52a12,12,0,1,1-12,12A12,12,0,0,1,128,52Z" />
        </G>
      </Svg>
    );
  }

