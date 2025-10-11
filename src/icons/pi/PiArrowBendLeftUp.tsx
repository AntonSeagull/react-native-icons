

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendLeftUp = (props: IconProps) => {

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
          <Path d="M208,224a8,8,0,0,1-8,8A104.11,104.11,0,0,1,96,128V51.31L61.66,85.66A8,8,0,0,1,50.34,74.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L112,51.31V128a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z" />
        </G>
      </Svg>
    );
  }

