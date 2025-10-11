

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatLineUpBold = (props: IconProps) => {

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
          <Path d="M232.48,111.51l-96-96a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,32,132H68v44a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12V132h36a12,12,0,0,0,8.48-20.49ZM176,108a12,12,0,0,0-12,12v44H92V120a12,12,0,0,0-12-12H61l67-67,67,67Zm12,108a12,12,0,0,1-12,12H80a12,12,0,0,1,0-24h96A12,12,0,0,1,188,216Z" />
        </G>
      </Svg>
    );
  }

