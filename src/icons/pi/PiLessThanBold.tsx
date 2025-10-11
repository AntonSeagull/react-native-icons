

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLessThanBold = (props: IconProps) => {

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
          <Path  d="M210.84,205.13a12,12,0,0,1-16,5.71l-152-72a12,12,0,0,1,0-21.68l152-72a12,12,0,1,1,10.27,21.69L76,128l129.1,61.15A12,12,0,0,1,210.84,205.13Z" />
        </G>
      </Svg>
    );
  }

