

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowLeftUp = (props: IconProps) => {

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
          <Path  d="M240,192a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V67.31L45.66,101.66A8,8,0,0,1,34.34,90.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L96,67.31V184H232A8,8,0,0,1,240,192Z" />
        </G>
      </Svg>
    );
  }

