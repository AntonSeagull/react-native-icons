

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSupersetOfBold = (props: IconProps) => {

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
          <Path d="M220,200a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24H208A12,12,0,0,1,220,200Zm-68-52H56a12,12,0,0,0,0,24h96a68,68,0,0,0,0-136H56a12,12,0,0,0,0,24h96a44,44,0,0,1,0,88Z" />
        </G>
      </Svg>
    );
  }

