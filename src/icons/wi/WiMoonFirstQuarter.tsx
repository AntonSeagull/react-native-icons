

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const WiMoonFirstQuarter = (props: IconProps) => {

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
          <Path  d="M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51V25.71z" />
        </G>
      </Svg>
    );
  }

