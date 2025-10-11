

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHourglassHighBold = (props: IconProps) => {

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
          <Path  d="M184,20H72A20,20,0,0,0,52,40V76a20.1,20.1,0,0,0,8,16l48,36L60,164a20.1,20.1,0,0,0-8,16v36a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V180.36a20.13,20.13,0,0,0-7.94-16L147.9,128l48.16-36.4a20.13,20.13,0,0,0,7.94-16V40A20,20,0,0,0,184,20Zm-4,24V60H76V44Zm-52,69L89.33,84h77Zm52,99H76V182l52-39,52,39.33Z" />
        </G>
      </Svg>
    );
  }

