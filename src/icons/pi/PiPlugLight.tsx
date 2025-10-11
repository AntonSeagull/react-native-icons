

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPlugLight = (props: IconProps) => {

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
          <Path  d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z" />
        </G>
      </Svg>
    );
  }

