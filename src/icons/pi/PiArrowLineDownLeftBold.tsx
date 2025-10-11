

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineDownLeftBold = (props: IconProps) => {

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
          <Path  d="M236,48a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H224A12,12,0,0,1,236,48ZM175.51,87.51,84,179V112a12,12,0,0,0-24,0v96a12,12,0,0,0,12,12h96a12,12,0,0,0,0-24H101l91.52-91.51a12,12,0,0,0-17-17Z" />
        </G>
      </Svg>
    );
  }

