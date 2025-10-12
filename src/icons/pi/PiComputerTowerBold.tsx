

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiComputerTowerBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M84,76A12,12,0,0,1,96,64h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,76Zm12,52h64a12,12,0,0,0,0-24H96a12,12,0,0,0,0,24ZM212,40V216a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V40A20,20,0,0,1,64,20H192A20,20,0,0,1,212,40Zm-24,4H68V212H188ZM128,168a16,16,0,1,0,16,16A16,16,0,0,0,128,168Z" />
        </G>
      </Svg>
    );
  }

