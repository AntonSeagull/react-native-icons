

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCropBold = (props: IconProps) => {

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
          <Path  d="M244,192a12,12,0,0,1-12,12H204v28a12,12,0,0,1-24,0V204H64a12,12,0,0,1-12-12V76H24a12,12,0,0,1,0-24H52V24a12,12,0,0,1,24,0V180H232A12,12,0,0,1,244,192ZM104,76h76v76a12,12,0,0,0,24,0V64a12,12,0,0,0-12-12H104a12,12,0,0,0,0,24Z" />
        </G>
      </Svg>
    );
  }

