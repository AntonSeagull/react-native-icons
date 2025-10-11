

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTelescopeSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M287.87,252.34l23.67-13.81-63.42-110-132.92,77C133.75,237.51,176,310,176,310l15.53-8.32c.24-.13.55,0,.83,0L102.65,496h35.16l99.05-214.25,23.24-13.4L358,464h36Z" />
          <Path  d="M262.08,96c24.81,42.23,60.25,104.25,86.4,148.76L510.79,151,424.07,1.41Z" />
        </G>
      </Svg>
    );
  }

