

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const WiMoonWaningCrescent5 = (props: IconProps) => {

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
          <Path  d="M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51c-2.59-0.79-4.48-2.13-5.69-4.02
	s-1.81-4.3-1.81-7.24c0-1.39,0.2-2.7,0.6-3.95c0.4-1.25,0.94-2.34,1.63-3.27s1.48-1.75,2.37-2.44s1.86-1.22,2.89-1.59
	c-2.04,0-3.92,0.5-5.65,1.51S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z" />
        </G>
      </Svg>
    );
  }

