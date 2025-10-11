

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFalloutShelterBold = (props: IconProps) => {

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
          <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm66-73.34-24,36a12,12,0,0,1-20,0l-22-33-22,33a12,12,0,0,1-20,0l-24-36A12,12,0,0,1,72,120h41.58L94,90.66A12,12,0,0,1,104,72h48a12,12,0,0,1,10,18.66L142.42,120H184a12,12,0,0,1,10,18.66Z" />
        </G>
      </Svg>
    );
  }

