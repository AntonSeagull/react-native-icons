

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const WiMoonThirdQuarter = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 30 30"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 15, 15)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51V3.19c-2.04,0-3.92,0.5-5.65,1.51
	S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z" />
        </G>
      </Svg>
    );
  }

