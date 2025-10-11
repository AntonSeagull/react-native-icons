

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiStairsThin = (props: IconProps) => {

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
          <Path  d="M200,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28ZM152,140h52v32H108V140Zm4-8V100h48v32ZM56,36H200a4,4,0,0,1,4,4V92H152a4,4,0,0,0-4,4v36H104a4,4,0,0,0-4,4v36H52V40A4,4,0,0,1,56,36ZM200,220H56a4,4,0,0,1-4-4V180H204v36A4,4,0,0,1,200,220Z" />
        </G>
      </Svg>
    );
  }

