

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSafetyCheck = (props: IconProps) => {

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
          <Path  d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5 s5,2.24,5,5S14.76,17,12,17z M13.65,14.35l-2.15-2.15V9h1v2.79l1.85,1.85L13.65,14.35z" />
        </G>
      </Svg>
    );
  }

