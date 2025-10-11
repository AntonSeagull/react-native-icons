

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowULeftUp = (props: IconProps) => {

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
          <Path d="M208,80v88a64,64,0,0,1-128,0V51.31L45.66,85.66A8,8,0,0,1,34.34,74.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L96,51.31V168a48,48,0,0,0,96,0V80a8,8,0,0,1,16,0Z" />
        </G>
      </Svg>
    );
  }

