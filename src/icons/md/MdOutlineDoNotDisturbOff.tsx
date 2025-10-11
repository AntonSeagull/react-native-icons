

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineDoNotDisturbOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M7.94,5.12C9.14,4.41,10.52,4,12,4c4.41,0,8,3.59,8,8c0,1.48-0.41,2.86-1.12,4.06l1.46,1.46C21.39,15.93,22,14.04,22,12 c0-5.52-4.48-10-10-10C9.96,2,8.07,2.61,6.49,3.66L7.94,5.12z" />
          <Path  d="M2.81,2.81L1.39,4.22l2.27,2.27C2.61,8.07,2,9.96,2,12c0,5.52,4.48,10,10,10c2.04,0,3.93-0.61,5.51-1.66l2.27,2.27 l1.41-1.41L2.81,2.81z M12,20c-4.41,0-8-3.59-8-8c0-1.48,0.41-2.86,1.12-4.06L8.17,11H7v2h3.17l5.88,5.88 C14.86,19.59,13.48,20,12,20z" />
        </G>
      </Svg>
    );
  }

