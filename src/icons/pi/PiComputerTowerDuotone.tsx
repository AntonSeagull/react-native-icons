

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiComputerTowerDuotone = (props: IconProps) => {

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
          <Path d="M200,40V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H192A8,8,0,0,1,200,40Z" />
          <Path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,72Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40Zm-16,0H64V216H192ZM128,168a12,12,0,1,0,12,12A12,12,0,0,0,128,168Z" />
        </G>
      </Svg>
    );
  }

