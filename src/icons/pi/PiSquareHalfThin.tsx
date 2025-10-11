

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSquareHalfThin = (props: IconProps) => {

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
          <Path  d="M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm-68,72h72v24H132Zm0-8V84h72v24Zm0,40h72v24H132Zm72-92V76H132V52h68A4,4,0,0,1,204,56ZM52,200V56a4,4,0,0,1,4-4h68V204H56A4,4,0,0,1,52,200Zm148,4H132V180h72v20A4,4,0,0,1,200,204Z" />
        </G>
      </Svg>
    );
  }

