

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCloudLightningLight = (props: IconProps) => {

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
          <Path  d="M156,18A74.21,74.21,0,0,0,86.11,67.3a6.18,6.18,0,0,0-1.83-.62A50.83,50.83,0,0,0,76,66a50,50,0,0,0,0,100h41.4L98.85,196.91A6,6,0,0,0,104,206h29.4l-18.55,30.91a6,6,0,0,0,10.3,6.18l24-40A6,6,0,0,0,144,194H114.6l16.8-28H156a74,74,0,0,0,0-148Zm0,136H76a38,38,0,1,1,6.31-75.48,6.82,6.82,0,0,0,.79.08A72.86,72.86,0,0,0,82,87.65a6,6,0,0,0,12,.7A62.06,62.06,0,1,1,156,154Z" />
        </G>
      </Svg>
    );
  }

